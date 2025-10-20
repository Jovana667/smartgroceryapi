module.exports = async function (context, req) {
  const products = [
    { id: 1, name: "Milk", price: 2.5, category: "Dairy" },
    { id: 2, name: "Bread", price: 3.0, category: "Bakery" },
    { id: 3, name: "Apple", price: 0.8, category: "Fruits" },
    { id: 4, name: "Banana", price: 0.5, category: "Fruits" },
    { id: 5, name: "Orange Juice", price: 4.5, category: "Beverages" },
  ];

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: {
      message: "Smart Grocery API - Products Retrieved",
      count: products.length,
      products: products,
    },
  };
};
