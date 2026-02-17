# Cartifya E-commerce Full Stack Application

A robust full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). This application features a comprehensive backend API, a responsive frontend interface, and key e-commerce functionalities like user authentication, product management, and category organization.

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for flexible data storage.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JWT (JSON Web Token)**: For secure user authentication and authorization.
- **Bcrypt**: For hashing passwords to ensure security.
- **Dotenv**: Module to load environment variables.
- **Morgan**: HTTP request logger middleware for Node.js.
- **Slugify**: For creating URL-friendly slugs.
- **Swagger UI Express / Swagger JSDoc**: For API documentation.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next Generation Frontend Tooling for fast development.
- **Material UI (@mui/material)**: React UI component library.
- **Tailwind CSS**: Utility-first CSS framework.
- **Axios**: Promise-based HTTP client for the browser.
- **React Router DOM**: Declarative routing for React web applications.
- **React Toastify**: For displaying notifications.
- **React Icons**: Include popular icons in your React projects.
- **React Hook Form**: Performant, flexible and extensible forms with easy-to-use validation.

## Features

- **User Authentication**: Secure Registration, Login, and Forgot Password securely using JWT and Bcrypt.
- **Role-Based Access Control**: Separate dashboards and access levels for Users and Admins.
- **Product Management**: Ability to Create, Read, Update, and Delete products.
- **Category Management**: Organize products into categories.
- **Search & Filter**: Find products easily.
- **Responsive Design**: Mobile-friendly interface powered by Tailwind CSS and Material UI.
- **API Documentation**: Interactive API documentation available via Swagger.

## proper API Documentation

The application includes Swagger UI for easy API exploration and testing.
Once the server is running, visit:
**`http://localhost:8080/api-doc`**

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **MongoDB**: You need a MongoDB connection string (local or Atlas).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install Backend Dependencies:**
    ```bash
    npm install
    ```

3.  **Install Frontend Dependencies:**
    ```bash
    cd client
    npm install
    cd ..
    ```

### Environment Variables

Create a `.env` file in the root directory and add the following configuration:

```env
PORT=8080
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Running the Application

You can run the application using the following commands from the root directory:

-   **Run both Server and Client concurrently (Recommended for Dev):**
    ```bash
    npm run dev
    ```

-   **Run Server only:**
    ```bash
    npm run server
    ```

-   **Run Client only:**
    ```bash
    npm run client
    ```
    *Note: The client runs on Vite.*

-   **Build for Production:**
    ```bash
    npm run build
    ```
    This will install dependencies for both client and server and build the React client.

## Scripts

-   `npm start`: Runs the server (production mode).
-   `npm run server`: Runs the server with Nodemon (development mode).
-   `npm run client`: Runs the data client.
-   `npm run dev`: Runs both server and client concurrently.
-   `npm run build`: Installs all dependencies and builds the client for production.

## Author

**Ritvij Verma**

## License

This project is licensed under the ISC License.
