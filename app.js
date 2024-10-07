const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data
let products = [
  {id: 1, name: "Product 1", price: 10},
  {id: 2, name: "Product 2", price: 20},
  {id: 3, name: "Product 3", price: 30},
];

// GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET a specific product by ID
app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({message: "Product not found"});
  }
});

// POST a new product
app.post("/api/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update a product by ID
app.put("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    res.json(product);
  } else {
    res.status(404).json({message: "Product not found"});
  }
});

// DELETE a product by ID
app.delete("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter((p) => p.id !== productId);

  res.json({message: "Product deleted"});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
