# CodeAlpha Task 2 - Login and Registration System

## 📌 Project Overview

This project is a simple Login and Registration System developed as part of the CodeAlpha Internship.

The system allows users to register with a username and password and securely log in using their registered credentials.

## 🚀 Features

- User Registration
- Username and Password Validation
- Duplicate Username Checking
- Password Hashing
- Secure User Data Storage
- User Login Authentication
- Success and Error Messages
- JSON-based Data Storage

## 🛠️ Technologies Used

- Node.js
- JavaScript
- Express.js
- bcrypt
- JSON

## 📂 Project Structure

CodeAlpha-Task-2
│
├── data
│   └── users.json
│
├── package.json
├── server.js
└── README.md

## ⚙️ How to Run

### Step 1: Install Node.js

Make sure Node.js is installed on your computer.

### Step 2: Open the Project Folder

Open the project folder in Command Prompt or Terminal.

### Step 3: Install Dependencies

npm install

### Step 4: Start the Server

node server.js

### Step 5: Open the Website

Open this URL in your browser:

http://localhost:3000

## 📝 Registration

The registration system:

1. Takes username and password.
2. Validates the input.
3. Checks whether the username already exists.
4. Hashes the password.
5. Stores the user information in users.json.
6. Displays a registration success or error message.

## 🔐 Login

The login system:

1. Takes username and password.
2. Reads stored user credentials.
3. Compares the entered password with the hashed password.
4. Verifies the user.
5. Displays a login success or error message.

## 🎯 Learning Outcomes

Through this project, I learned:

- Node.js fundamentals
- Express.js
- User authentication
- Password hashing
- JSON file handling
- Form validation
- Backend development

## 👨‍💻 Developed For

CodeAlpha Internship

## 📌 Task

Task 2 - Login and Registration System
