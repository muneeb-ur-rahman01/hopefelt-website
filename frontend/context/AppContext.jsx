"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import * as api from "@/lib/api";

const AppContext = createContext(null);

const SESSION_HINT = "hf_has_session";
const CHANNEL = "hf_auth";
const REFRESH_MARGIN_SEC = 60;

/* ---------- Safe browser storage ---------- */

const safeStorage = {
  get() {
    try {
      return window.localStorage.getItem(SESSION_HINT) === "1";
    } catch {
      return false;
    }
  },

  set(on) {
    try {
      if (on) {
        window.localStorage.setItem(SESSION_HINT, "1");
      } else {
        window.localStorage.removeItem(SESSION_HINT);
      }
    } catch {
      // Storage may be unavailable in private browsing.
    }
  },
};

/* ---------- Provider ---------- */

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authStatus, setAuthStatus] = useState("loading");
  const [opportunities, setOpportunities] = useState(null);

  const tokenRef = useRef(null);
  const inflightRefresh = useRef(null);
  const timerRef = useRef(null);
  const channelRef = useRef(null);
  const applySessionRef = useRef(null);

  /* ---------- Session helpers ---------- */

  const clearSession = useCallback((broadcast = false) => {
    tokenRef.current = null;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setUser(null);
    setAuthStatus("anonymous");
    safeStorage.set(false);

    if (broadcast) {
      channelRef.current?.postMessage("logout");
    }
  }, []);

  const applySession = useCallback(
    (session) => {
      if (!session?.accessToken || !session?.user) {
        throw new Error("Invalid session response from server.");
      }

      tokenRef.current = session.accessToken;

      setUser(session.user);
      setAuthStatus("authenticated");
      safeStorage.set(true);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      const expiresIn = Number(session.expiresIn) || 900;

      const refreshAfter = Math.max(
        5,
        expiresIn - REFRESH_MARGIN_SEC
      );

      timerRef.current = setTimeout(() => {
        refreshRef.current?.();
      }, refreshAfter * 1000);
    },
    []
  );

  applySessionRef.current = applySession;

  /* ---------- API refresh ---------- */

  const refreshRef = useRef(null);

  const refresh = useCallback(() => {
    if (inflightRefresh.current) {
      return inflightRefresh.current;
    }

    const run = api
      .refreshSession()
      .then((session) => {
        applySessionRef.current(session);
        return session.accessToken;
      })
      .catch((err) => {
        if (err?.status === 401 || err?.status === 403) {
          clearSession(false);
        } else {
          setAuthStatus((current) =>
            current === "loading" ? "anonymous" : current
          );
        }

        return null;
      })
      .finally(() => {
        inflightRefresh.current = null;
      });

    inflightRefresh.current = run;

    return run;
  }, [clearSession]);

  refreshRef.current = refresh;

  /* ---------- Configure API ---------- */

  useEffect(() => {
    api.configureApi({
      getAccessToken: () => tokenRef.current,
      refreshAccessToken: () => refreshRef.current?.(),
    });
  }, []);

  /* ---------- Lifecycle ---------- */

  useEffect(() => {
    let mounted = true;

    if (safeStorage.get()) {
      refresh();
    } else {
      setAuthStatus("anonymous");
    }

    if (typeof BroadcastChannel !== "undefined") {
      const channel = new BroadcastChannel(CHANNEL);

      channel.onmessage = (event) => {
        if (!mounted) return;

        if (event.data === "logout") {
          clearSession(false);
        }

        if (event.data === "login") {
          refresh();
        }
      };

      channelRef.current = channel;
    }

    const onVisible = () => {
      if (
        document.visibilityState === "visible" &&
        safeStorage.get() &&
        !tokenRef.current
      ) {
        refresh();
      }
    };

    document.addEventListener("visibilitychange", onVisible);

    return () => {
      mounted = false;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      channelRef.current?.close();
      channelRef.current = null;

      document.removeEventListener(
        "visibilitychange",
        onVisible
      );
    };
  }, [refresh, clearSession]);

  /* ---------- Authentication ---------- */

  const login = useCallback(async (email, password) => {
    const session = await api.loginUser({
      email,
      password,
    });

    applySessionRef.current(session);

    channelRef.current?.postMessage("login");

    return session.user;
  }, []);

  const register = useCallback(async ({
    fullName,
    email,
    password,
  }) => {
    const session = await api.registerUser({
      fullName,
      email,
      password,
    });

    applySessionRef.current(session);

    channelRef.current?.postMessage("login");

    return session.user;
  }, []);

  const logout = useCallback(async () => {
    try {
      await api.logoutUser();
    } catch {
      // Clear local session even if server is unavailable.
    }

    clearSession(true);
  }, [clearSession]);

  const logoutAll = useCallback(async () => {
    try {
      await api.logoutAllDevices();
    } finally {
      clearSession(true);
    }
  }, [clearSession]);

  const updateProfile = useCallback(async (data) => {
    const updated = await api.updateMe(data);

    setUser(updated);

    return updated;
  }, []);

  const changePassword = useCallback(
    async (currentPassword, newPassword) => {
      await api.changePassword({
        currentPassword,
        newPassword,
      });

      clearSession(true);
    },
    [clearSession]
  );

  /* ---------- Opportunities ---------- */

  const loadOpportunities = useCallback(async () => {
    const list = await api.getOpportunities();

    setOpportunities(list);

    return list;
  }, []);

  /* ---------- Context value ---------- */

  const value = useMemo(() => {
    const role = user?.role;

    return {
      // User state
      user,
      authStatus,
      isLoading: authStatus === "loading",
      isAuthenticated: authStatus === "authenticated",

      // Roles
      isStaff: role === "staff" || role === "admin",
      isAdmin: role === "admin",

      hasRole: (...roles) =>
        Boolean(role && roles.includes(role)),

      // Authentication
      login,
      register,
      logout,
      logoutAll,
      updateProfile,
      changePassword,

      // Forms and applications
      submitContact: api.submitContactForm,
      submitApplication: api.submitApplication,
      getMyApplications: api.getMyApplications,
      withdrawApplication: api.withdrawApplication,

      // Opportunities
      opportunities,
      loadOpportunities,

      // Admin API
      admin: api.admin,
    };
  }, [
    user,
    authStatus,
    opportunities,
    login,
    register,
    logout,
    logoutAll,
    updateProfile,
    changePassword,
    loadOpportunities,
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

/* ---------- Custom hook ---------- */

export function useApp() {
  const context = useContext(AppContext);

  if (context === null) {
    throw new Error(
      "useApp must be used inside AppProvider."
    );
  }

  return context;
}

export default AppContext;
