const request = require("supertest");
const app = require("../app");

describe("API Tests", () => {
  test("GET / should return success message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello Azure!");
  });

  test("GET /api/products should return products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /api/products should create product", async () => {
    const newProduct = { name: "Test Product", price: 15.99 };
    const response = await request(app).post("/api/products").send(newProduct);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newProduct.name);
  });
});
