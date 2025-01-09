# Coworking Space Online Reservation Platform

This project is a web application for online reservation of coworking spaces. It includes both a **React+vite** frontend and an **Express.js** backend, styled using **Tailwind CSS** and **shadcn** components.

---

## Table of contents
1. [Setup](#setup)
2. [Installation and Setup](#installation-and-setup)  
3. [Technologies Utilisées](#technologies-used)  
4. [Prerequisites](#prerequisites)  
   - [Prérequis](#prerequisites)  
   - [Étapes d'Installation](#steps-to-run-locally)  
5. [Architecture des Composants](#component-architecture)  
6. [Utilisation](#utilisation)  

---

## Features
This platform allows users to:
- Reserve various spaces such as **desks**, **meeting rooms**, **training rooms**, **shared spaces**, and **reception areas**.
- After clicking "Réserver," users are redirected to a detailed page for the specific space (identified by its ID). 
- On the detailed page, users can reserve by clicking on an available chair.
- View their entire reservation history by clicking on "Historique" in the navigation bar.

For administrators:
- After logging in, they are redirected to the **Dashboard**.
- In the sidebar, they can access the list of users with all their details.
- Manage reservations by either accepting or canceling them.

This project aims to simplify the management and reservation of coworking spaces, providing an intuitive interface for both users and administrators.

---
## setup
- clone the project then delete the .git folder to start a new project and then open your terminal and type "git init"
- Set up your credentials and the origin you want to point inti with git.
- run yarn to install  dependencies and set up the project
- Create a .env file at the root of the project and copy the .env example text into it (make sure that the .env file is added to .gitgonre)
  
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

### Start the application:

- Run the Backend Server:
- yarn dev

- Run the Frontend:
Navigate to the client directory:
- cd client
- yarn dev

5. Access the Application:
   
   Open your browser and navigate to:
   http://localhost:3000

### Configure Environment Variables
Create a `.env` file in the `server` folder with the following variables:

```env
PORT=5000
DATABASE_URL=your_database_connection_string
SECRET=your_jwt_secret




