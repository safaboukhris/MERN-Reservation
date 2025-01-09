# Coworking Space Online Reservation Platform

This project is a web application for online reservation of coworking spaces. It includes both a **React+vite** frontend and an **Express.js** backend, styled using **Tailwind CSS** and **shadcn** components.

---

## Table des Matières

1. [Installation and Setup](#installation-and-setup)  
2. [Technologies Utilisées](#technologies-used)  
3. [Prerequisites](#prerequisites)  
   - [Prérequis](#prerequisites)  
   - [Étapes d'Installation](#steps-to-run-locally)  
4. [Architecture des Composants](#component-architecture)  
5. [Utilisation](#utilisation)  

---

## Features
- Browse available coworking spaces.
- Book coworking spaces online.
- Manage reservations (for admins and users).
- Responsive and modern design.

---

## Technologies Used
- **Frontend**: React.js, Tailwind CSS, shadcn
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## Component Architecture
- **admin**: -components  
  -pages  
- **pages**:  
  - DetailEspace  
  - Home  
  - Login  
  - Register  
  - Reservations

---

### Admin Credentials:
- Email : admin@yahoo.fr
- Mot de Passe : 123456
## Installation and Setup

### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or higher)
- yarn
- MongoDB (local or cloud-based database instance)
- dependencies:

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
2. Install dependencies for both the frontend and backend:
# Frontend
- cd client
- yarn install

# Backend
- cd server
- yarn install

### Configure Environment Variables
Create a `.env` file in the `server` folder with the following variables:

```env
PORT=5000
DATABASE_URL=your_database_connection_string
SECRET=your_jwt_secret



### Start the application:

- Run the Backend Server:
- yarn dev

-Run the Frontend:
Navigate to the client directory:
- cd client
- yarn dev

5. Access the Application:
   
   Open your browser and navigate to:
   http://localhost:3000

