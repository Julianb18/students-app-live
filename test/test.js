const request = require("supertest");
const app = require("../app");

describe("Test the students route", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/api/students");
    expect(response.statusCode).toBe(200);
  });
});
