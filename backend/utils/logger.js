// Minimal structured logger (JSON lines in production). Never log secrets,
// passwords, tokens or full request bodies.
const config = require("../config/config");

const LEVELS = { error: 0, warn: 1, info: 2, debug: 3 };
const current = LEVELS[process.env.LOG_LEVEL || (config.isTest ? "error" : "info")] ?? 2;

function write(level, msg, meta) {
  if (LEVELS[level] > current) return;
  const entry = { time: new Date().toISOString(), level, msg, ...meta };
  const line = config.isProd ? JSON.stringify(entry) : `[${entry.time}] ${level.toUpperCase()} ${msg}${meta ? " " + JSON.stringify(meta) : ""}`;
  (level === "error" ? console.error : console.log)(line);
}

module.exports = {
  error: (m, x) => write("error", m, x),
  warn: (m, x) => write("warn", m, x),
  info: (m, x) => write("info", m, x),
  debug: (m, x) => write("debug", m, x),
};
