// index.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5080;

// Import products
const products = require("./data/products.json");

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, API!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
