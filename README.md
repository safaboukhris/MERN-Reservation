# Coworking Space Online Reservation Platform

This project is a web application for online reservation of coworking spaces. It includes both a **React+vite** frontend and an **Express.js** backend, styled using **Tailwind CSS** and **shadcn** components.

## Features
- Browse available coworking spaces.
- Book coworking spaces online.
- Manage reservations (for admins and users).
- Responsive and modern design.

---

## Technologies Used
- **Frontend**: React.js, Tailwind CSS, shadcn
- **Backend**: Node.js, Express.js
- **Database**:  MongoDB
---

## Installation and Setup

### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or higher)
- yarn
- [Database (if applicable)]

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>


2- Install dependencies for both the frontend and backend:
# Frontend
cd client
yarn install

# Backend
yarn install

3- Configure environment variables:
•	Create a env file in the server folder with the following variables:

- PORT=5000
- DATABASE_URL=your_database_connection_string
- JWT_SECRET=your_jwt_secret

4-Start the application:
•	Run the backend server:
                       yarn dev
•	Run the frontend:

cd  client
yarn dev
5- Access the application: Open your browser and navigate to http://localhost:3000.

