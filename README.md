# Coworking Space Online Reservation Platform

This project is a web application for online reservation of coworking spaces. It includes both a **React+vite** frontend and an **Express.js** backend, styled using **Tailwind CSS** and **shadcn** components.

---

## Table of contents
1. [Features](#Features)
2. [setup](#setup)  
3. [Technologies Utilisées](#technologies-used)  
4. [Folder Structure](#UI-Interface-Folder)  
   - [Prérequis](#Prerequisites)  
   - [Étapes d'Installation](#steps-to-run-locally)  
5. [Installation](#Installation)  
6. [Steps to Run Locally](#Steps-to-Run-Locally)
7. [Access the Application](#Access-the-Application)

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
- Set up your credentials and the origin you want to point into with git.
- run yarn to install  dependencies and set up the project
- Create a .env file at the root of the project and copy the .env(make sure that the .env file is added to .gitgonre)
- Create a `.env` file in the `server` folder with the following variables:

```env
PORT=5000
DATABASE_URL=your_database_connection_string
SECRET=your_jwt_secret
```
  
## Technologies Used
- **Frontend**: React.js, Tailwind CSS, shadcn
- **Backend**: Node.js, Express.js
- **Database**: MongoDB


## Folder Structure

The project includes a well-organized folder structure. One of the key folders is the **UI Interface**, which contains all components and styles used for the frontend design.
### UI Interface Folder
The **UI Interface** folder includes:
- **Components**: Reusable React components such as buttons, forms, and modals,.
- **Pages**: Specific pages like login, home, espace details, register , reservation and history.
- **Public**: Images, icons, and other static files used across the UI.
- **validation** :folder is designed for handling form validation using **Zod**. It includes schemas and utilities to ensure that user input is validated consistently across the application.
- **utils**: This folder includes reusable utilities for handling API interactions. It contains:
  - **`axiosInstance`**: A pre-configured Axios instance for making API requests with default settings such as base URL, headers, and interceptors.
  - **`fetchData`**: A utility function for simplifying GET requests using the Axios instance.
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


### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or higher)
- yarn
- MongoDB (local or cloud-based database instance)

## Dependencies
### Production Dependencies
- **@hookform/resolvers** (^3.9.1): Provides validation resolvers for `react-hook-form` with popular schema validation libraries like Zod.
- **@tanstack/react-table** (^8.20.5): A powerful and extensible table-building library for React.
- **axios** (^1.7.8): A promise-based HTTP client for making API requests.
- **class-variance-authority** (^0.7.1): A utility for managing class names in components.
- **clsx** (^2.1.1): A utility for conditionally joining class names.
- **date-fns** (^4.1.0): A library for manipulating and formatting dates in JavaScript.
- **embla-carousel-react** (^8.5.1): A carousel/slider library for React.
- **framer-motion** (^11.15.0): A library for animations and gestures in React.
- **lucide-react** (^0.462.0): React icons built from Lucide.
- **react** (^18.3.1): A library for building user interfaces.
- **react-day-picker** (8.10.1): A library for building date pickers in React.
- **react-dom** (^18.3.1): React's DOM package for web rendering.
- **react-hook-form** (^7.53.2): A library for managing form state and validation in React.
- **react-icons** (^5.3.0): Popular icons for React.
- **react-router-dom** (^7.0.1): A library for managing routing in React.
- **react-spinner** (^0.2.7): A React library for spinners and loaders.
- **react-spinners** (^0.15.0): Another spinner/loader library for React.
- **tailwindcss-animate** (^1.0.7): A plugin for adding animation utilities to Tailwind CSS.
- **zod** (^3.23.8): A TypeScript-first schema validation library.

  ### Development Dependencies
- **@eslint/js** (^9.15.0): ESLint core configuration for JavaScript linting.
- **@types/node** (^22.10.1): TypeScript definitions for Node.js.
- **@types/react** (^18.3.12): TypeScript definitions for React.
- **@types/react-dom** (^18.3.1): TypeScript definitions for React DOM.
- **tailwindcss** (^3.4.15): A utility-first CSS framework for styling.
- **typescript** (~5.6.2): A typed superset of JavaScript.
- **eslint** (^9.15.0): A tool for identifying and fixing JavaScript code issues.
- **typescript-eslint** (^8.15.0): ESLint plugin for TypeScript.
- **vite** (^6.0.1): A fast build tool for modern web applications.
  ### Installation
To install all dependencies, run:
```bash
cd client
yarn install
```
### Backend Dependencies

The backend of this project is built using **Node.js** and includes the following dependencies:

- **bcryptjs** (^2.4.3): A library for hashing passwords for secure user authentication.
- **body-parser** (^1.20.3): Middleware for parsing incoming request bodies in a middleware format.
- **cors** (^2.8.5): Middleware for enabling Cross-Origin Resource Sharing (CORS) to handle requests from different origins.
- **dotenv** (^16.4.5): A module for loading environment variables from a `.env` file.
- **express** (^4.21.1): A lightweight web application framework for building APIs.
- **jsonwebtoken** (^9.0.2): A library for generating and verifying JSON Web Tokens (JWT) for user authentication and authorization.
- **mongoose** (^8.8.3): An object data modeling (ODM) library for MongoDB and Node.js.
- **nodemon** (^3.1.7): A utility that monitors for file changes and automatically restarts the server during development.
- **passport** (^0.7.0): Middleware for handling authentication strategies.
- **passport-jwt** (^4.0.1): A Passport strategy for authenticating with JWTs.

### Installation
To install all backend dependencies, navigate to the backend directory and run:
```bash
yarn install
```
 ### Admin Credentials:
- Email : admin@yahoo.fr
- Mot de Passe : 123456

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>


###  Access the Application:
   
   Open your browser and navigate to:
   http://localhost:3000





