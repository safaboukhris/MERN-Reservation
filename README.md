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
- Create an account and log in to access the reservation features.
- Reserve various spaces such as **Bureau**, **Salle de reunion**, **Salle de formation**, **Réception**, and **Espace calme**.
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


---
## Folder Structure

The project includes a well-organized folder structure. One of the key folders is the **UI Interface**, which contains all components and styles used for the frontend design.
### UI Interface Folder
The **UI Interface** folder includes:
- **Components**: Reusable React components such as buttons, forms, and modals,.
- **Pages**: Specific pages like login, home, espace details, register , reservation and history.
- **Styles**: Custom styles and Tailwind CSS configurations to ensure a consistent design.
- **Assets**: Images, icons, and other static files used across the UI.

### Hooks Folder
The **hooks** folder contains custom React hooks for managing reusable logic, such as state management, API calls, or side effects, to keep components clean and organized.

### Validation Folder
The **validation** folder is designed for handling form validation using **Zod**. It includes schemas and utilities to ensure that user input is validated consistently across the application.

### Utils Folder
The **utils** folder includes helper functions and utilities that are used throughout the project. Examples might include date formatters, API wrappers, or reusable logic for calculations.

### Admin Folder
The **admin** folder is dedicated to the admin panel and includes:
- **Components**: 
  - `AppSidebar`: The sidebar navigation for the admin panel.
  - `DataTable`: A table component used to display data like users, bookings, and rooms.
- **Pages**: 
  - `BookingList`: Displays all user bookings for the admin to manage.
  - `Columns`: Manages column definitions for tables in the admin panel.
  - `ColumnHistory`: Shows the history of changes or bookings.
  - `Dashboard`: The main dashboard providing an overview of admin-specific metrics and information.
  - `RoomList`: Displays and manages a list of rooms available for booking.
  - `UserList`: Displays and manages user information.

This structure ensures a clean separation of concerns, making the codebase easy to navigate and extend.

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




