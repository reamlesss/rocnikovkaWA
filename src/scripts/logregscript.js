// server.js

const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "trapovejgulas",
  database: "Krasino",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected");
});

app.use(express.json());


app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  const INSERT_USER_QUERY = `INSERT INTO Users (username, email, password) VALUES (?, ?, ?)`;
  db.query(INSERT_USER_QUERY, [username, email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error registering user");
    } else {
      res.status(200).send("User registered successfully");
    }
  });
});

// API endpoint for user login (authentication)
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const SELECT_USER_QUERY = `SELECT * FROM Users WHERE email = ? AND password = ?`;
  db.query(SELECT_USER_QUERY, [email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error authenticating user");
    } else if (result.length > 0) {
      res.status(200).send("Login successful");
    } else {
      res.status(401).send("Invalid email or password");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
