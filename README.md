# Layrd 👗✨

> **Digitize your wardrobe. Build outfits visually. Get AI styling suggestions.**

Layrd is a full-stack MERN styling tool that helps users figure out if an outfit combination actually works — before buying anything. Pick a silhouette, build the look on an interactive canvas, and let the AI complete missing pieces using only items available in the catalogue.

------------------------------------------------------------------------

# 🚀 Live Demo

**Live Link:** *[Click Here](https://layrd-eight.vercel.app)*

------------------------------------------------------------------------

## 📸 Screenshots

### 🏠 Landing Page
![Landing Page](./screenshots/landing-page.png)

### 👗 Clothing Library
![Clothing Library](./screenshots/clothing-library.png)

### 🎨 Outfit Builder
![Outfit Builder](./screenshots/outfit-builder.png)

### 🤖 AI Stylist
![AI Stylist](./screenshots/ai-stylist.png)

### 🧥 My Wardrobe
![My Wardrobe](./screenshots/my-wardrobe.png)

------------------------------------------------------------------------

# ✨ Features

## 🔐 Authentication

-   User Registration & Login
-   JWT Authentication
-   Password Hashing (bcrypt)
-   Protected Routes
-   User-specific saved outfits

## 👗 Clothing Library

-   Browse curated wardrobe
-   Category filters
-   Search clothing
-   Premium editorial UI
-   Rich clothing metadata

## 🎨 Outfit Builder

- Drag & Drop on desktop
- Tap-to-add interaction on mobile
- Four dedicated outfit slots
- Category validation
- Replace/remove items
- Clear outfit
- Save complete outfits

## 🧥 My Wardrobe

-   View saved outfits
-   Outfit preview cards
-   Delete saved outfits
-   User-specific wardrobe

## 🤖 AI Stylist

-   Powered by Groq
-   Detects missing outfit categories
-   Suggests only wardrobe items
-   Considers style, occasion, season and color compatibility
-   Automatically fills missing outfit slots

## 📱 Responsive Experience

- Responsive UI across desktop and mobile
- Drag-and-drop on desktop
- Tap-to-add interactions on mobile

------------------------------------------------------------------------

# 🛠 Tech Stack

  Layer            Technology
  ---------------- ---------------------------
  Frontend         React, Vite, Tailwind CSS
  Backend          Node.js, Express.js
  Database         MongoDB, Mongoose
  Authentication   JWT, bcryptjs
  AI               Groq API
  Drag & Drop      @dnd-kit/core

## ☁️ Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

------------------------------------------------------------------------

# 🤖 AI Recommendation Pipeline

Unlike traditional AI outfit generators, Layrd **never invents
clothing**. Recommendations are restricted to clothing that already
exists inside the wardrobe.

``` text
User builds outfit on Canvas
            │
            ▼
Detect missing categories
            │
            ▼
Fetch only matching wardrobe items
            │
            ▼
Convert wardrobe into structured prompt
            │
            ▼
Groq generates recommendations
            │
            ▼
Validate returned item names
against MongoDB
            │
            ▼
Return complete clothing objects
            │
            ▼
Automatically fill canvas
```

### Pipeline

1.  User drags clothing onto the outfit canvas.
2.  Backend identifies missing categories.
3.  MongoDB returns only relevant clothing items.
4.  Backend converts wardrobe into structured context.
5.  Groq receives:
    -   Current outfit
    -   Available wardrobe
    -   Style rules
    -   JSON response instructions
6.  Groq returns structured JSON.
7.  Backend validates returned names against MongoDB.
8.  Complete clothing documents are returned.
9.  Frontend updates the missing outfit slots.

------------------------------------------------------------------------

# 🏗 Architecture

``` text
React Frontend
      │
      ▼
Express REST API
      │
      ├────────► MongoDB
      │
      └────────► Groq API
                   │
                   ▼
          Recommendation JSON
                   │
                   ▼
        MongoDB Validation
                   │
                   ▼
            React Canvas
```

------------------------------------------------------------------------

# 📂 Database Models

### User

``` json
{
  "name":"String",
  "email":"String",
  "passwordHash":"String"
}
```

### ClothingItem

``` json
{
  "name":"String",
  "category":"String",
  "subCategory":"String",
  "style":["String"],
  "occasion":["String"],
  "season":["String"],
  "color":"String",
  "imageUrl":"String"
}
```

### Outfit

``` json
{
  "userId":"ObjectId",
  "top":"ObjectId",
  "bottom":"ObjectId",
  "shoes":"ObjectId",
  "accessory":"ObjectId"
}
```

------------------------------------------------------------------------

# 📡 API Reference

  Method   Endpoint              Description
  -------- --------------------- ----------------------
  POST     /auth/register        Register user
  POST     /auth/login           Login
  GET      /items                Fetch clothing
  GET      /items?category=top   Category filter
  POST     /outfits              Save outfit
  GET      /outfits              Get outfits
  DELETE   /outfits/:id          Delete outfit
  POST     /ai/suggest           AI outfit completion

------------------------------------------------------------------------

# 💻 Local Setup

## Prerequisites

- Node.js
- MongoDB Atlas account
- Groq API Key

### Clone the Repository

```bash
git clone https://github.com/niyatipandey/Layrd.git
cd Layrd
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
PORT=3000
```

Start the backend:

```bash
npm start
```

### Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

Open your browser at:

```text
http://localhost:5173
```

------------------------------------------------------------------------

# ⚙ Technical Challenges

-   Designing structured prompts for consistent JSON responses.
-   Preventing AI from recommending unavailable clothing.
-   Mapping Groq responses back to MongoDB documents.
-   Building drag-and-drop interactions with category validation.
-   Maintaining user-specific wardrobes using JWT authentication.

------------------------------------------------------------------------

# 📁 Project Structure

``` text
Layrd/
├── client/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── utils/
└── server/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── data/
    ├── services/
    └── seed.js
```
------------------------------------------------------------------------ 

# 🚀 Future Improvements

- Upload personal wardrobe images
- AI-generated outfit explanations
- Favorite outfits
- Occasion-based outfit collections
- Dark mode

------------------------------------------------------------------------

# 📖 What I Learned

-   Building JWT authentication.
-   Designing REST APIs.
-   MongoDB data modeling with Mongoose.
-   Drag-and-drop interfaces using @dnd-kit.
-   Prompt engineering for structured AI        responses.
-   Integrating Groq into a complete application workflow.
-   Building an end-to-end MERN project from idea to deployment.

------------------------------------------------------------------------

# 💡 Why Layrd?

Most outfit tools either store clothes or generate random looks.

**Layrd does something different — it lets you test the outfit that's already in your head.**

You know the silhouette you want. You don't know what completes it. Layrd gives you a visual canvas to build combinations by style type and lets an AI stylist fill the gaps — constrained strictly to what's in the catalogue, never inventing items that don't exist.

The goal is to make the gap between imagining an outfit and validating it as small as possible.

**Built with ❤️ using React • Node.js • MongoDB • Groq API**

