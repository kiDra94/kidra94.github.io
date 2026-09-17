---
title: "GraphForge ERP"
description: "A graph-based ERP backend in FastAPI and Neo4j: recursive bills of materials, stock derived from its own movement history and documents from quote to invoice, tested up to a real Neo4j."
tags: ["Python", "FastAPI", "Neo4j", "Cypher", "Docker", "Testcontainers"]
githubUrl: "https://github.com/kiDra94/graphforge-erp"
liveUrl: "https://graphforge-erp.onrender.com/api/docs"
liveNote: "First load may take ~1 min — free-tier instance waking up."
order: 1
---

**GraphForge ERP** is the backend of a small ERP system for a manufacturing business, built with FastAPI on Neo4j and organised by domain.
The requirements come from day-to-day work in a real manufacturing business; this public version is reduced to its core and runs on invented demo data.

### Key Features
- **A graph where the domain is a graph:** Bills of materials, document chains and asset structures are resolved in a single Cypher traversal instead of many round trips.
- **Stock you can prove:** Stock levels are a cache over an append-only movement history, and every domain books through one single function.
- **Business rules in one place:** Which document moves stock and which one does not is decided by small pure functions that can be tested on their own.
- **Two kinds of authorisation:** Role gates decide who may call an endpoint; field masking decides which fields a role gets to see, such as purchase prices and margins.
- **Tested on three levels:** Unit tests, API tests through the real app and integration tests against a real Neo4j started by Testcontainers, all run by GitHub Actions.

### Live Demo
The Swagger UI runs on Render with a Neo4j Aura database.

> **Demo credentials (read-only, fake data):** `max.mustermann@acme.example` / `demo1234`

### Tech Stack
- **Backend:** Python 3.14, FastAPI, Pydantic v2
- **Database:** Neo4j 5 with the async driver and plain Cypher, no ORM
- **Testing:** pytest, Testcontainers, ruff, pyright
- **Infrastructure & Deployment:** Docker Compose, GitHub Actions, Render, Neo4j Aura
