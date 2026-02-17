# 🛒 Cartifya — Full Stack E-commerce Application

**Cartifya** is a production-ready e-commerce platform built using the **MERN Stack** (MongoDB, Express, React, Node.js) and **Redis**. It features secure authentication, role-based access, and a modern user interface.

---

## 🏗️ Project Status: In Development 🛠️

> **Important Note:** The **Payment Integration (Razorpay)** and **Full Cart System** are currently in **Development Mode**. I am actively working on these features to make them fully functional for production.

---

## ✨ Key Features

- 🔐 **Secure Auth:** JWT-based login and registration with Redis token blacklisting for extra security.
- 👤 **Role-Based Access:** Separate dashboards and permissions for **Admins** and **Users**.
- 📦 **Product Management:** Full CRUD (Create, Read, Update, Delete) functionality for products and categories (Admin only).
- 🛒 **Cart System (Dev Mode):** Users can add and remove products from their cart.
- 💳 **Payment Gateway (Dev Mode):** Integrated with Razorpay using Test Mode keys.
- ⚡ **Performance:** Uses Redis for fast session management and security.
- 📱 **Responsive UI:** Fully optimized for mobile, tablet, and desktop screens.

---
## 🔗 Related Repository

Check out the backend code for this project here:  
👉 https://github.com/ritvijverma/Cartifya-Frontend

---

## 🚀 Tech Stack

### 🔹 Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Redis (ioredis)
- JWT Authentication

### 🔹 Frontend
- React.js
- Vite
- Redux Toolkit
- Tailwind CSS
- Ant Design

### 🔹 Payment Gateway
- Razorpay

## ⚙️ Getting Started

Follow these steps to set up the project on your local machine.

### ✅ Prerequisites
* **Node.js** (v18 or higher)
* **MongoDB** (Atlas Cloud or Local)
* **Redis** (Installed locally or via Redis Cloud)
* **Razorpay Account** (To get your Test API Keys)

### 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/cartifya.git](https://github.com/your-username/cartifya.git)
   cd cartifya ```

2. Install Dependencies
   ``` basg
       npm install    ```
   
3.Environment Variables

   ```
MONGO_URI=your_mongo_connection_string
PORT=8000
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
 ```
### Run in Development Mode

 - To start backend and frontend together:

``` npm run dev ```

 - Backend runs on:

```http://localhost:8000```


- Frontend runs on:

```http://localhost:5173```


---

## 👨‍💻 About Me

Hi, I'm **Ritvij Verma**, a B.Tech (CSE, 2025) graduate and Full Stack Developer passionate about building scalable and user-friendly web applications.

I enjoy working on backend architecture, performance optimization, and real-world problem solving using modern technologies.

---

## 📬 Contact Me

- 📧 Email: your-email@example.com  
- 💼 LinkedIn: https://linkedin.com/in/your-profile  
- 🖥 GitHub: https://github.com/your-username  

---

## 💡 Feedback & Contributions

Your feedback, suggestions, and contributions are always welcome!

If you find any bugs or have ideas for improvements:
- Open an issue  
- Submit a pull request  
- Or connect with me directly  

⭐ If you like this project, consider giving it a star!


