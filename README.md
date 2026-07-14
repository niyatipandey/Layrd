# Layrd 👗✨

**Build your wardrobe. Style your look.**

Layrd is a full-stack MERN outfit planning application that helps users build outfits from a digital wardrobe. Browse curated clothing, drag pieces onto an interactive outfit canvas, save complete looks, and receive AI-powered outfit recommendations using Gemini.

![Status](https://img.shields.io/badge/status-active%20development-orange?style=flat-square)
![Stack](https://img.shields.io/badge/stack-MERN-blue?style=flat-square)
![AI](https://img.shields.io/badge/AI-Gemini-purple?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

# 📚 Table of Contents

- Features
- Tech Stack
- Database Models
- API Reference
- Backend Status
- Project Structure
- Roadmap
- Why Layrd

---

# ✨ Features

## 🔐 Authentication

- User registration
- User login
- JWT authentication
- Password hashing using bcrypt
- Protected routes
- User-specific wardrobe and outfits

---

## 👗 Clothing Library

- Browse curated wardrobe collection
- Filter clothing by category
- Rich clothing metadata
  - Style
  - Occasion
  - Season
  - Color
- Editorial-quality clothing images

---

## 🎨 Outfit Builder

- Interactive drag-and-drop canvas
- Four outfit slots
  - Top
  - Bottom
  - Shoes
  - Accessory
- Category validation while dragging
- Replace outfit pieces
- Remove individual pieces
- Clear entire outfit
- Save outfits

---

## 🧥 My Wardrobe

- View saved outfits
- Outfit preview cards
- Delete outfits
- User-specific wardrobe storage

---

## 🤖 AI Stylist

- Powered by Gemini
- Completes incomplete outfits
- Suggests only clothing available in the user's wardrobe
- Recommendations based on
  - Style
  - Occasion
  - Season
  - Color compatibility
- Automatically fills missing outfit slots on the canvas

---

# 🛠 Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs |
| AI | Gemini API |
| Drag & Drop | @dnd-kit/core |

---

# 📂 Database Models

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
  "subCategory": "String",
  "style": ["String"],
  "occasion": ["String"],
  "season": ["String"],
  "color": "String",
  "material": "String",
  "fit": "String",
  "formality": "Number",
  "warmth": "Number",
  "layering": "Boolean",
  "tags": ["String"],
  "imageUrl": "String"
}
```

</details>

<details>
<summary><strong>Outfit</strong></summary>

```json
{
  "userId": "ObjectId → User",
  "slots": {
    "top": "ObjectId → ClothingItem",
    "bottom": "ObjectId → ClothingItem",
    "shoes": "ObjectId → ClothingItem",
    "accessory": "ObjectId → ClothingItem"
  }
}
```

Each outfit stores ObjectId references to clothing items, populated when fetching saved outfits.

</details>

---

# 📡 API Reference

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and receive JWT |

---

## Clothing Items

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/items` | Get all clothing items |
| GET | `/items?category=top` | Filter by category |
| GET | `/items/:id` | Get clothing item details |

---

## Outfits *(Protected)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/outfits` | Save outfit |
| GET | `/outfits` | Get user's outfits |
| DELETE | `/outfits/:id` | Delete outfit |

---

## AI *(Protected)*

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/ai/suggest` | Complete missing outfit slots using Gemini |

---

# ✅ Backend Status

- [x] MongoDB integration
- [x] JWT authentication
- [x] Authentication middleware
- [x] Password hashing
- [x] Clothing API
- [x] Outfit CRUD API
- [x] User-specific data
- [x] MongoDB seed script
- [x] Gemini AI integration
- [x] AI recommendation endpoint
- [x] MongoDB item matching
- [x] Postman tested

---

# 📁 Project Structure

```
Layrd/

├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── utils/
│
└── server/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── data/
    ├── seed.js
    └── index.js
```

---

# 🗺 Roadmap

## ✅ Completed

- Project setup
- JWT authentication
- MongoDB database
- Clothing library
- Outfit CRUD API
- Drag-and-drop outfit builder
- Category validation
- Outfit editing
- Save outfits
- Wardrobe page
- Delete outfits
- Gemini AI Stylist

---

## 🚧 In Progress

- Search functionality
- Loading states
- Responsive design
- UI polish
- Animations

---

## 🔜 Planned

- AI explanation for outfit recommendations
- Toast notifications
- Empty states
- Deployment
  - Frontend → Vercel
  - Backend → Render

---

# 💡 Why Layrd?

Most wardrobe applications focus on helping users organize clothes.

**Layrd focuses on creating complete outfits.**

Users can visually build looks using an interactive drag-and-drop canvas, save personalized outfits, and use an AI Stylist powered by Gemini to intelligently complete missing pieces using only items available in their own wardrobe.

The goal is to make outfit planning simple, visual, and personal.

---

# 📌 Status

> 🚧 Core functionality is completed. The project is currently focused on UI polish, responsiveness, and deployment.

---

<div align="center">

**Built with ❤️ using React · Node.js · MongoDB · Gemini AI**

</div>