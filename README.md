# Smart Expense Tracker | MERN Stack Project 🚀

A modern full-stack Expense Tracker application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This application helps users manage income and expenses with real-time balance calculation through a clean and responsive dashboard UI.

## 🌐 Live Demo
Frontend: https://smart-expense-tracker-backend-theta.vercel.app/
Backend:  https://smart-expense-tracker-api-4yqz.onrender.com

---

## 📌 Project Overview

Smart Expense Tracker is a full-stack MERN application designed to simplify personal finance management through real-time income and expense tracking.
Users can add income and expense transactions, monitor balance dynamically, and manage financial records efficiently through an organized dashboard interface.
This project demonstrates frontend-backend integration, REST API development, MongoDB CRUD operations, and responsive UI design using the MERN stack.
The frontend is developed using React.js and Tailwind CSS, while the backend is built using Node.js and Express.js. MongoDB Atlas is used as the cloud database for storing transaction data.

---

## ✨ Features

- Add Income Transactions
- Add Expense Transactions
- Delete Transactions
- Real-Time Balance Calculation
- Income & Expense Summary
- Dynamic and Responsive Dashboard
- REST API Integration
- MongoDB Cloud Database Storage
- Full MERN Stack Architecture

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Deployment
- Vercel
- Render

### Version Control
- Git & GitHub

---

## 🧩 System Architecture

```text
Frontend (React.js)
        ↓
REST API Calls (Axios)
        ↓
Backend Server (Node.js + Express.js)
        ↓
MongoDB Atlas Database
```

---

## 📂 Project Structure

```text
smart-expense-tracker-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── expenseController.js
│   └── userController.js
│
├── models/
│   ├── Expense.js
│   └── User.js
│
├── routes/
│   ├── expenseRoutes.js
│   └── userRoutes.js
│
├── smart-expense-tracker-frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── .env
├── package.json
└── server.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/nithi-05K/smart-expense-tracker-backend.git
```

---

### 2️⃣ Backend Setup

Navigate to backend folder:

```bash
cd smart-expense-tracker-backend
```

Install dependencies:

```bash
npm install
```

Run backend server:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Navigate to frontend folder:

```bash
cd smart-expense-tracker-frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🔗 API Endpoints

### Expense APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/expenses | Fetch all expenses |
| POST | /api/expenses/add | Add new expense |
| DELETE | /api/expenses/:id | Delete expense |

---

## 🚀 Deployment
- Frontend deployed on Vercel
- Backend deployed on Render
- Database hosted on MongoDB Atlas

---

## 👨‍💻 Author

**Nithitha** 
