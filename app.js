// index.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, API!");
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      description: "test test test test",
      image: "https://shorturl.at/gbc3p",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      description: "test test test test",
      image: "https://shorturl.at/C8CCO",
    },
  ];
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
