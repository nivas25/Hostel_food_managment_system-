# Hostel Food Management System

A full-stack MERN application designed to manage the dining operations of a hostel, providing a digital interface for administrators, staff, and residents.

> [!CAUTION]
> **Desktop Application Only**
> This project was developed specifically for desktop use. The user interface is not responsive and will not render correctly on mobile or tablet devices.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Core Features](#core-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Running the Application](#running-the-application)

---

## Project Overview

The Hostel Food Management System is a comprehensive tool built to replace manual record-keeping with an efficient, centralized digital platform. It addresses the challenges of menu planning, resident feedback collection, and administrative oversight. The system provides distinct functionalities based on user roles, ensuring that each user has access to the tools and information relevant to them.

---

## Core Features

-   **Role-Based Authentication**: Secure login and distinct dashboards for four user types: Administrator, Warden, Kitchen Staff, and Hostel Resident.
-   **Centralized Menu Management**: Allows administrators or kitchen staff to create, publish, and update daily or weekly meal menus.
-   **Resident Portal**: Residents can log in to view current menus, check meal schedules, and submit feedback on food quality and service.
-   **Administrative Dashboard**: Provides system administrators with tools to manage user accounts, oversee system activity, and view reports.
-   **Warden Oversight**: Wardens have specific permissions to monitor resident activities and manage hostel-related announcements or rules.

---

## Technology Stack

-   **Frontend**: React.js
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB (with Mongoose for object data modeling)
-   **Authentication**: JSON Web Tokens (JWT) for stateless session management.

---

## Project Structure

The project is organized into two main directories within the root folder:

```
Hostel_food_managment_system-/
├── backend/         # Contains the Express.js server, API routes, models, and database logic.
└── my-app/          # Contains the React.js client-side application and all UI components.
```

---

## Prerequisites

Ensure you have the following software installed on your local machine before proceeding:

-   [Node.js](https://nodejs.org/en/download/) (v14 or higher is recommended)
-   [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
-   [MongoDB](https://www.mongodb.com/try/download/community) installed locally or a connection string from a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier cluster.

---

## Installation and Setup

Follow these instructions carefully to get the project running.

### Step 1: Clone the Repository

First, clone the project from GitHub to your local machine.

```bash
git clone [https://github.com/nivas25/Hostel_food_managment_system-.git](https://github.com/nivas25/Hostel_food_managment_system-.git)
cd Hostel_food_managment_system-
```

### Step 2: Configure the Backend Server

1.  Navigate into the `backend` directory.

    ```bash
    cd backend
    ```

2.  Install the required npm packages.

    ```bash
    npm install
    ```

3.  Create an environment variables file. This file will store your secret keys and database connection string. Create a new file named `.env` in the `backend` directory.

4.  Add the following key-value pairs to the `.env` file. **You must replace the placeholder values with your actual credentials.**

    ```ini
    # Replace 'MONGO_URI' with the actual variable name your code uses.
    # Replace the value with your MongoDB connection string.
    MONGO_URI=mongodb://localhost:27017/hostelDB

    # Replace 'JWT_SECRET' with the actual variable name your code uses.
    # Use a long, random, and secret string for security.
    JWT_SECRET=this-is-a-very-strong-and-secret-key-for-jwt
    ```

### Step 3: Configure the Frontend Client

1.  Open a **new terminal window** and navigate to the `my-app` directory from the project root.

    ```bash
    cd my-app
    ```

2.  Install the required npm packages.

    ```bash
    npm install
    ```

---

## Running the Application

To run the application, you must have both the backend server and the frontend client running simultaneously in two separate terminals.

### Terminal 1: Start the Backend Server

-   Make sure you are in the `backend` directory.
-   Run the start command:

    ```bash
    npm start
    ```

-   The server will start, typically on port 5000. You will see a confirmation message in the console, such as `Server is running on port 5000`.

### Terminal 2: Start the Frontend Client

-   Make sure you are in the `my-app` directory.
-   Run the start command:

    ```bash
    npm start
    ```

-   This will launch the React development server and automatically open the application in your default web browser at `http://localhost:3000`.

The application is now fully running and ready for use.
