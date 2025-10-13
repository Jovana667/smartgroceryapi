const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple endpoints to test
app.get("/", (req, res) => {
  res.json({ message: "Hello Azure!", status: "success" });
});

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 20.99 },
  ]);
});

app.post("/api/products", (req, res) => {
  const product = req.body;
  res.status(201).json({ ...product, id: 3 });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
