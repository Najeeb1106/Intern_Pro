# InternPro.pk 🚀
> **Pakistan's #1 Virtual Internship Platform**

InternPro.pk is a modern, full-stack virtual internship platform designed to bridge the gap between education and employment. It provides students with real-world project experience, AI-powered interview practice, and a streamlined job portal.

![InternPro Home](assets/home.png)

## 🌟 Key Features

### 🤖 InternPro AI Assistant (Chatbot)
The **InternPro Assistant** is a core highlight of the platform, designed to provide 24/7 support to internees.
- **Smart Onboarding**: Guides new users through available internship tracks.
- **Task Assistance**: Helps students understand their weekly tasks and submission requirements.
- **Career Guidance**: Provides AI-driven advice on learning paths and resume building.
- **Instant FAQ**: Answers common questions about certificates, deadlines, and platform usage.

![AI Assistant](assets/chatbot.png)

### 📊 Professional Dashboard
A centralized hub for students to track their progress, manage profiles, and view recent activities.
- **Progress Tracking**: Visual indicators of internship completion rates.
- **Profile Customization**: Dynamic profile management with persistent data.
- **Activity Log**: Real-time history of applications and task submissions.

![Dashboard](assets/dashboard.png)

### 💼 Internship & Job Portal
- **Diverse Tracks**: Over 50 industry sectors including Web Dev, AI, Data Science, and Design.
- **Simplified Application**: One-click apply for internships and entry-level roles.
- **Filtered Search**: Advanced search and filtering by domain and location.

![Internship Portal](assets/internship-portal.png)

### 🎙️ Mock Interview Module
- **AI Mock Interviews**: Practice with an AI interviewer tailored to your specific domain.
- **Real-time Feedback**: Get instant scores and tips for improvement.

---

## 🛠️ Tech Stack

### Frontend
- **React 18** & **Vite**: Ultra-fast development and optimized production builds.
- **Lucide React**: Premium icon set for a clean UI.
- **Vanilla CSS**: Custom-crafted, responsive design with modern glassmorphism.
- **Axios**: Centralized API communication with JWT interceptors.

### Backend
- **Node.js** & **Express**: Robust and scalable server architecture.
- **MongoDB** & **Mongoose**: Flexible NoSQL data persistence.
- **JWT & Bcryptjs**: Secure authentication and password hashing.
- **Helmet & Express Rate Limit**: Production-grade security middleware.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Najeeb1106/Intern_Pro.git
cd Intern_Pro
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your MONGO_URI and JWT_SECRET
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (`/backend/.env`)
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server Port | `5000` |
| `MONGO_URI` | MongoDB Connection String | `mongodb://...` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key` |
| `NODE_ENV` | Environment Mode | `development` |

---

## 📂 Project Structure
```text
Intern_Pro/
├── assets/           # Media and screenshots
├── backend/          # Node.js Express server
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API endpoints
│   └── controllers/  # Business logic
└── frontend/         # React Application
    ├── src/
    │   ├── components/ # Reusable UI components
    │   ├── pages/      # Route-level components
    │   └── styles/     # Custom CSS designs
    └── public/       # Static assets
```

---

## 📝 License
This project is licensed under the MIT License.

---
Built with ❤️ by [Najeeb](https://github.com/Najeeb1106)
