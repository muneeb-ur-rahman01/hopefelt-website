-- Hopefelt Foundation schema (PostgreSQL / Supabase). Idempotent: safe to re-run.

CREATE TABLE IF NOT EXISTS users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name     TEXT NOT NULL,
  email         TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  role          TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'staff', 'admin')),
  is_active     BOOLEAN NOT NULL DEFAULT TRUE,
  last_login_at TIMESTAMPTZ,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS users_email_uidx ON users (lower(email));

CREATE TABLE IF NOT EXISTS contact_messages (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES users(id) ON DELETE SET NULL,
  full_name       TEXT NOT NULL,
  email           TEXT NOT NULL,
  phone           TEXT,
  organisation    TEXT,
  enquiry_type    TEXT NOT NULL,
  subject         TEXT NOT NULL,
  message         TEXT NOT NULL,
  response_method TEXT NOT NULL DEFAULT 'email' CHECK (response_method IN ('email', 'phone', 'whatsapp')),
  consent         BOOLEAN NOT NULL,
  status          TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'spam')),
  admin_notes     TEXT,
  handled_by      UUID REFERENCES users(id) ON DELETE SET NULL,
  ip              TEXT,
  user_agent      TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS contact_messages_status_idx ON contact_messages (status, created_at DESC);
CREATE INDEX IF NOT EXISTS contact_messages_type_idx ON contact_messages (enquiry_type);

CREATE TABLE IF NOT EXISTS applications (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID REFERENCES users(id) ON DELETE SET NULL,
  opportunity_slug  TEXT NOT NULL,
  opportunity_title TEXT NOT NULL,
  full_name         TEXT NOT NULL,
  email             TEXT NOT NULL,
  phone             TEXT,
  city              TEXT,
  country           TEXT,
  organisation      TEXT,
  message           TEXT NOT NULL,
  availability      TEXT,
  details           JSONB NOT NULL DEFAULT '{}'::jsonb,
  consent           BOOLEAN NOT NULL,
  status            TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'accepted', 'rejected', 'withdrawn')),
  admin_notes       TEXT,
  reviewed_by       UUID REFERENCES users(id) ON DELETE SET NULL,
  ip                TEXT,
  user_agent        TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS applications_status_idx ON applications (status, created_at DESC);
CREATE INDEX IF NOT EXISTS applications_slug_idx ON applications (opportunity_slug);
CREATE INDEX IF NOT EXISTS applications_user_idx ON applications (user_id);
CREATE INDEX IF NOT EXISTS applications_email_idx ON applications (lower(email));
-- One open application per person per opportunity (race-safe duplicate guard).
CREATE UNIQUE INDEX IF NOT EXISTS applications_open_uidx
  ON applications (lower(email), opportunity_slug)
  WHERE status IN ('pending', 'under_review');

-- Supabase exposes tables through PostgREST. Enabling RLS with no policies
-- blocks that public path; this API connects as the table owner and is unaffected.
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
