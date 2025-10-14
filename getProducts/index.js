module.exports = async function (context, req) {
       const products = [
           { id: 1, name: "Milk", price: 2.50, category: "Dairy" },
           { id: 2, name: "Bread", price: 3.00, category: "Bakery" },
           { id: 3, name: "Apple", price: 0.80, category: "Fruits" },
           { id: 4, name: "Banana", price: 0.50, category: "Fruits" },
           { id: 5, name: "Orange Juice", price: 4.50, category: "Beverages" }
       ];

       context.res = {
           status: 200,
           headers: { 'Content-Type': 'application/json' },
           body: {
               message: "Smart Grocery API - Products Retrieved",
               count: products.length,
               products: products
           }
       };
   };
