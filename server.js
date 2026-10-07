const express = require("express");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const dataDir = path.join(__dirname, "data");
const usersFile = path.join(dataDir, "users.json");

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, "[]");
}

function getUsers() {
    return JSON.parse(fs.readFileSync(usersFile, "utf8"));
}

function saveUsers(users) {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Registration
app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required."
            });
        }

        if (username.length < 3) {
            return res.status(400).json({
                message: "Username must be at least 3 characters."
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters."
            });
        }

        const users = getUsers();

        const existingUser = users.find(
            user => user.username.toLowerCase() === username.toLowerCase()
        );

        if (existingUser) {
            return res.status(409).json({
                message: "Username already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        users.push({
            username: username,
            password: hashedPassword
        });

        saveUsers(users);

        res.json({
            message: "Registration successful!"
        });

    } catch (error) {
        res.status(500).json({
            message: "Registration failed."
        });
    }
});

// Login
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Please enter username and password."
            });
        }

        const users = getUsers();

        const user = users.find(
            user => user.username.toLowerCase() === username.toLowerCase()
        );

        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password."
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid username or password."
            });
        }

        res.json({
            message: "Login successful! Welcome " + user.username
        });

    } catch (error) {
        res.status(500).json({
            message: "Login failed."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
