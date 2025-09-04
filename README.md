
---

## 📂 Frontend – README.md  

```markdown
# Frontend - Unit Management UI

## 🚀 Features
- Single Page Application (SPA) built with Next.js + TailwindCSS + TypeScript.
- Integrates with the Backend API (`http://localhost:8080/api/v1`).
- Pages & Components:
  - Unit List (name, type, status).
  - Filters by type (`capsule`, `cabin`) or status.
  - Add Unit Form (status defaults to `Available`).
  - Update status via dropdown (SweetAlert confirmation).

---

## 🛠️ Tech Stack
- Next.js
- TailwindCSS
- TypeScript
- SweetAlert2

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm
- recommend use pnpm

### Steps
```bash
# Go to frontend folder
cd frontend

# Install dependencies
pnpm install

# Start dev server
pnpm dev
