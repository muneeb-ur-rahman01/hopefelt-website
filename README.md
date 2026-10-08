# Hopefelt Foundation Website

A full-stack website for **Hopefelt Foundation** — a Next.js frontend and an
Express.js backend API, kept in separate, independently runnable folders.

## Project Overview

- Responsive marketing site (home, about, services, products, contact) with a
  sticky navbar, dropdown menus, animated hero, scroll-reveal sections, a
  team org-chart, and a row-based product listing.
- Content (nav items, about cards, team hierarchy, services, products) lives
  in plain JavaScript data files under `frontend/data/`, so editing copy
  never requires touching a component.
- A small Express API backs the contact form and exposes read endpoints for
  products/team/services so that data can move to a real database later
  without changing how the frontend calls it.

## Technologies Used

**Frontend:** Next.js 14 (App Router), React 18, Tailwind CSS
**Backend:** Node.js, Express.js, CORS, dotenv

## Project Structure

```text
hopefelt-foundation/
├── frontend/
│   ├── app/               # routes (App Router)
│   ├── components/        # reusable UI components
│   ├── data/               # nav, about, services, products, team data
│   ├── lib/                 # API client (contact form -> backend)
│   └── public/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── data/                # static data served by GET endpoints
│   └── server.js
└── README.md
```

## Installation & Setup

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev        # nodemon, http://localhost:5000
# or: npm start
```

Environment variables (`backend/.env`):

| Variable      | Description                                  | Default                 |
| ------------- | --------------------------------------------- | ------------------------ |
| `PORT`        | Port the API listens on                       | `5000`                  |
| `CORS_ORIGIN` | Allowed origin(s) for the frontend, comma-sep | `http://localhost:3000` |

### 2. Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev         # http://localhost:3000
# or: npm run build && npm start
```

Environment variables (`frontend/.env.local`):

| Variable                    | Description                        | Default                    |
| ---------------------------- | ----------------------------------- | --------------------------- |
| `NEXT_PUBLIC_API_BASE_URL`   | Base URL of the backend API          | `http://localhost:5000/api` |

Run the backend and frontend in two terminals; the contact form on
`/contact` posts to the backend, everything else renders from local data.

## Available API Endpoints

| Method | Endpoint         | Description                          |
| ------ | ----------------- | ------------------------------------- |
| GET    | `/api/health`      | Health check                          |
| GET    | `/api/products`    | List of products                      |
| GET    | `/api/team`        | Team hierarchy tree                   |
| GET    | `/api/services`    | List of services                      |
| POST   | `/api/contact`     | Submit the contact form (validated)   |

`POST /api/contact` expects JSON: `fullName`, `email`, `phone` (optional),
`subject`, `message`. Returns `400` with a `message`/`errors` array on
validation failure, `200` with `{ success: true, message }` on success.

## Routes (Frontend)

```text
/                                          Home
/about                                     About overview
/about/who-we-are, /our-mission, /our-vision, /our-team, /our-impact
/services                                  Services overview
/services/community-development, /education, /healthcare,
        /women-youth-empowerment, /social-support
/products                                  Products overview (row listing)
/products/hope-baskets, /skill-kits, /community-handbook,
        /care-packages, /impact-merchandise
/contact                                   Contact form
```

All `/about/[slug]`, `/services/[slug]`, and `/products/[slug]` routes are
driven by one dynamic page per section reading from the matching data file
— add an entry to the data file to add a page, no new route files needed.

## Build & Deployment

**Frontend** — build a production bundle and start it (or deploy to
Vercel/any Node host):

```bash
cd frontend
npm run build
npm start
```

**Backend** — run with a process manager in production, e.g.:

```bash
cd backend
npm install --production
NODE_ENV=production node server.js
```

Set `NEXT_PUBLIC_API_BASE_URL` on the frontend deployment to the backend's
public URL, and `CORS_ORIGIN` on the backend to the frontend's public URL.

## Notes

- Images currently come from `picsum.photos` as working placeholders (no
  broken images) — swap the URLs in `frontend/data/*.js` and
  `frontend/components/Hero.jsx` for real photography before launch.
- Contact submissions are logged server-side; wire `contactController.js`
  to a database or email service (e.g. Nodemailer, SendGrid) for production
  use.
