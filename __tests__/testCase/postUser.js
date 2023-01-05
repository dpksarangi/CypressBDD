const data = require("../resources/postUser.json");
const axios = require("axios");
const { expect } = require("chai");

describe("post user", () => {
  test("create user Tester", async () => {
    const response = await axios.post("https://reqres.in/api/users", data);
    expect(JSON.stringify(response.status)).to.include("201");
    expect(JSON.stringify(response.data)).to.include("Deepak");
    console.log(response.data);
  });
});
