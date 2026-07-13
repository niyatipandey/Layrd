# Layrd 👗✨

**Build your wardrobe. Style your look.**

Layrd is a full-stack MERN outfit planning application that helps users build outfits from a digital wardrobe — browse curated clothing, drag pieces onto an interactive canvas, save complete looks, and get AI-powered recommendations.

![Status](https://img.shields.io/badge/status-active%20development-orange?style=flat-square)
![Stack](https://img.shields.io/badge/stack-MERN-blue?style=flat-square)
![AI](https://img.shields.io/badge/AI-Gemini-purple?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

</div>

---

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Database Models](#-database-models)
- [API Reference](#-api-reference)
- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Why Layrd](#-why-layrd)

---

## ✨ Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes
- User-specific wardrobe and outfits

### 👗 Clothing Library
- Browse a curated wardrobe collection
- Filter by category (top, Bottoms, Shoes, Accessories)
- Rich clothing metadata (color, style tags, season)
- Editorial-quality UI
- Search *(in progress)*

### 🎨 Outfit Builder
- Interactive drag-and-drop canvas
- Four outfit slots — Top, Bottom, Shoes, Accessory
- Replace or remove individual pieces
- Clear entire outfit
- Save outfits *(in progress)*

### 🤖 AI Stylist *(Planned)*
- Complete outfits using Gemini AI
- Suggest matching pieces from your wardrobe
- Recommendations based on style compatibility, occasion, season, and color

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcryptjs |
| AI | Gemini API |
| Drag & Drop | @dnd-kit/core |

---

## 📂 Database Models

<details>
<summary><strong>User</strong></summary>

```json
{
  "name": "String",
  "email": "String",
  "passwordHash": "String"
}
```

</details>

<details>
<summary><strong>ClothingItem</strong></summary>

```json
{
  "name": "String",
  "category": "String",
  "color": "String",
  "styleTags": ["String"],
  "season": "String",
  "imageUrl": "String"
}
```

</details>

<details>
<summary><strong>Outfit</strong></summary>

```json
{
  "userId": "ObjectId → User",
  "top": "ObjectId → ClothingItem",
  "bottom": "ObjectId → ClothingItem",
  "shoes": "ObjectId → ClothingItem",
  "accessory": "ObjectId → ClothingItem",
  "savedAt": "Date"
}
```

> Each outfit stores `ObjectId` references to clothing items, populated when fetching saved outfits.

</details>

---

## 📡 API Reference

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Login and receive JWT |

### Clothing Items

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/items` | Get all clothing items |
| `GET` | `/items?category=top` | Filter by category |
| `GET` | `/items/:id` | Get a single clothing item |

### Outfits *(Protected)*

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/outfits` | Save an outfit |
| `GET` | `/outfits` | Get the current user's outfits |
| `DELETE` | `/outfits/:id` | Delete an outfit |

### AI *(Planned)*

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/ai/suggest` | Complete an outfit using Gemini |

---

## ✅ Backend Status

- [x] MongoDB integration
- [x] JWT authentication
- [x] Auth middleware
- [x] Password hashing
- [x] Clothing API
- [x] Outfit CRUD API
- [x] User-specific data
- [x] Database seed script
- [x] Postman tested

---

## 📁 Project Structure

```
Layrd/
│
├── client/                   # React frontend
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ClothingCard.jsx
│   │   │   ├── ClothingPanel.jsx
│   │   │   ├── CanvasSlot.jsx
│   │   │   └── OutfitCanvas.jsx
│   │   ├── context/
│   │   │   └── GenderContext.js
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Library.jsx
│   │   │   └── Canvas.jsx
│   │   └── utils/
│   │       └── api.js
│
└── server/                   # Express backend
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── data/
    ├── seed.js
    └── index.js
```

---

## 🗺 Roadmap

### ✅ Completed
- Project setup and folder structure
- JWT authentication system
- MongoDB database and models
- Clothing collection and API
- Outfit CRUD API
- Interactive drag-and-drop outfit canvas
- Category filtering and validation
- Outfit editing (replace, remove, clear)

### 🚧 In Progress
- Save outfits (frontend)
- Wardrobe page
- Search functionality
- Frontend polish and animations

### 🔜 Planned
- AI Stylist powered by Gemini
- Responsive / mobile design
- Loading skeletons and empty states
- Deployment — Render (backend) + Vercel (frontend)

---

## 💡 Why Layrd?

Most wardrobe apps focus on **storing** clothes.

**Layrd focuses on creating outfits.**

Users can visually build complete looks on an interactive drag-and-drop canvas, then let an AI Stylist intelligently fill in missing pieces based on style compatibility, occasion, season, and what's already in their wardrobe.

The goal is to make outfit planning **simple, visual, and personal.**

---

## 📌 Status

> 🚧 Backend complete. Frontend actively under development.

---

<div align="center">
  <sub>Built with ♥ using React · Node.js · MongoDB · Gemini AI</sub>
</div>
