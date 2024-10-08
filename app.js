const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 5080;

// Import products
const products = require("./data/products.json");
const categories = require("./data/categories.json");

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
