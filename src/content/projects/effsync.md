---
title: "EffSync"
description: "A web-based task management system for schools, built as a two-person diploma thesis: nested tasks with role-based rights, live chat, grading and a calendar, on a NestJS backend organised by domain."
tags: ["TypeScript", "NestJS", "Vue 3", "PostgreSQL", "Prisma", "Socket.io", "Jest", "GitHub Actions"]
githubUrl: "https://github.com/kiDra94/EffSync"
order: 0
---

**EffSync** helps teachers and students plan, delegate, track and complete their work: teachers create tasks for their classes, students hand in submissions and get graded.
It is our diploma thesis at HTL BULME Graz, which I built together with Ereny Micail. The written thesis (in German) is part of the repository.

### Key Features
- **Tasks of any depth:** Subtasks nest without limit and are protected against circular references. A parent task can complete itself from its subtasks through a logical rule (AND, OR, XOR, NOT).
- **Rights per task:** Roles decide what someone may do in the system; on each task, members get `READ`, `WRITE` or `EXECUTE` rights, which are inherited down the task tree.
- **School workflow:** Submissions lock after the deadline, teachers grade them, and the dashboard shows status, progress and overdue tasks.
- **Live chat and notifications:** Direct and group chats over WebSockets, in-app and e-mail notifications for deadlines, comments and mentions.
- **Security:** JWT with refresh tokens, sign-in with Google, two-factor authentication (TOTP), rate limiting and anonymised accounts on deletion (GDPR).

### Architecture
After the thesis, I refactored the backend from one module per database table into **bounded contexts** (identity & access, task management, documents & notes, communication, school organisation, notifications, reporting), each split into domain, application, infrastructure and presentation layers. `dependency-cruiser` enforces the dependency rules between them in CI, so the structure can't quietly erode again.

### Tests & CI
- **Backend:** Jest unit tests and E2E tests against a disposable PostgreSQL database, covering every documented endpoint with its happy path and its 400/401/403/404 cases.
- **Frontend:** Vitest component tests and Cypress.
- **GitHub Actions:** lint, unused-code check (`knip`), dependency rules, tests with coverage thresholds and the build, for frontend and backend on every push.

### Tech Stack
- **Frontend:** Vue 3, Vite, Pinia, Vue Router, Bootstrap 5, Chart.js
- **Backend:** NestJS 11 (TypeScript), Passport (JWT, Google OAuth 2.0), Socket.io, Nodemailer, Swagger
- **Database:** PostgreSQL with Prisma 7
- **Testing & CI:** Jest, Supertest, Vitest, Cypress, dependency-cruiser, knip, GitHub Actions
