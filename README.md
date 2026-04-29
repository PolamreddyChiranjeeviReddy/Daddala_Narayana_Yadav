# MERN Leader Portfolio

This project is a MERN-stack portfolio website (React client + Express/Mongo server) designed for a political leader showcase.

## Run (development)

From the repo root:

```bash
npm run dev
```

- Client: http://localhost:5173
- Server: http://localhost:5000
- Health check: http://localhost:5000/api/health

## Content

- Client fallback content: `client/src/content/site.ts`
- API content endpoint: `GET /api/site`
- Optional persistence (Mongo): set `MONGODB_URI` in `server/.env` (copy from `server/.env.example`).

## Notes

This is inspired by common “leader portfolio” patterns (hero + about + journey + achievements + media + gallery + contact). Replace placeholder text/images with verified official information.
