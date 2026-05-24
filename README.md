# 🏎️ Final Project: Full-Stack Authentication System Deployment
### Angular 21 Auth Frontend

![Angular](https://img.shields.io/badge/Angular-17-red)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-teal)

---

## 🌐 Live URLs

| Service | URL |
|---|---|
| **Frontend (Live)** | https://angular-auth-cuerda.netlify.app |
| **Backend API** | https://backend-repo-node-mysql-auth-api.onrender.com |
| **API Documentation** | https://backend-repo-node-mysql-auth-api.onrender.com/api-docs |

---

## 📋 Features

- ✅ Email sign up and verification
- ✅ JWT authentication with refresh tokens
- ✅ Role based authorization (User & Admin)
- ✅ Forgot password and reset password
- ✅ View and update profile
- ✅ Admin section for managing all accounts
- ✅ F1 Paddock themed UI

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js v18+
- Angular CLI: `npm install -g @angular/cli`

### Installation
```bash
git clone https://github.com/s3agui/Frontend-repo-angular-21-auth-frontend.git
cd Frontend-repo-angular-21-auth-frontend
npm install
```

### Run Development (Fake Backend)
```bash
git checkout main
npm start
```
Open: http://localhost:4200

### Run with Real Backend
```bash
git checkout real-backend
npm start
```
Open: http://localhost:4200

---

## 🌿 Branch Structure

| Branch | Description |
|---|---|
| `main` | Stage A — Fake backend enabled |
| `real-backend` | Stage B — Connected to real Node.js API |

---

## 🔴 Stage A — Fake Backend Demo

The `main` branch has the fake backend enabled in `app.module.ts`:

```typescript
// app.module.ts
fakeBackendProvider  // ← fake backend active
```

Features demonstrated:
- Registration with mock email alert on screen
- Email verification via blue alert link
- Login with JWT simulation
- Admin panel access (first account)
- RBAC — User restricted from Admin panel

---

## 🟢 Stage B — Real Backend Demo

The `real-backend` branch connects to the live Node.js API:

```typescript
// src/environments/environment.prod.ts
export const environment = {
    production: true,
    apiUrl: 'https://backend-repo-node-mysql-auth-api.onrender.com'
};
```

Features demonstrated:
- Real registration with Mailtrap email verification
- JWT + Refresh token in browser cookies
- Real MySQL database on Hostinger
- Full Admin CRUD operations

---

## 🔐 Security

- No sensitive data hardcoded
- Environment configs handled via `environment.ts`
- JWT tokens stored in memory (not localStorage)
- Refresh tokens in HttpOnly cookies

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Angular 17 | Frontend framework |
| Bootstrap 5 | UI styling |
| TypeScript | Language |
| RxJS | Reactive programming |
| JWT | Authentication |
| Angular Guards | Route protection |
| HTTP Interceptors | JWT injection |

---

## 📁 Project Structure
