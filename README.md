# Real Estate Website with Admin Panel

## Project Overview

This project is a full-stack Real Estate website developed using **React.js** for the frontend and **Node.js + Express.js** for the backend, with **MongoDB** as the database.

The website replicates the provided real estate layout and includes a functional **Admin Panel** that allows dynamic editing of text-based content for all major sections of the website.

---

## Live Deployment Links

Frontend (Vercel): https://megaplex-assessment.vercel.app/

Backend (Render):  https://megaplex-assessment.onrender.com

---

## Admin Login Credentials

Use the following credentials to access the Admin Panel:

- **Email:** admin@gmail.com  
- **Password:** 1234  

Admin Login Route:
/admin/login


---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- CORS

### Hosting
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Features

### User Website Sections

- Hero Section
- Project Overview
- Amenities Section
- About Us
- Construction Updates
- FAQ Section

All content is dynamically fetched from the backend.

---

### Admin Panel Features

- Fixed credential-based login
- Protected admin routes
- Editable text content for:
  - Hero Section
  - About Us
  - Construction Updates
  - FAQ
- Changes are stored in MongoDB
- Updates reflect instantly on the website

 Images are static as per assignment requirements.

---

## Local Setup Instructions

### Clone Repository
git clone https://github.com/Laxmi-gupta/megaPlex-assessment.git

---

## How It Works

1. Admin logs in using fixed credentials.
2. Admin edits content from the Admin Panel.
3. Data is saved in MongoDB.
4. Frontend fetches updated content via API.
5. Website updates dynamically without code changes.
