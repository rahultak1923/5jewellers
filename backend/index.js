const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();


// Enable CORS
// ye middleware allow karta hai localhost api ko use karne ke liye 
app.use(cors());

// Load JSON file
const user = JSON.parse(fs.readFileSync("./jewellery.json", "utf-8"));

const PORT = 8001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Endpoint
app.get("/allproduct", (req, res) => {
  return res.json(user);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
