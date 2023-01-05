const axios = require("axios");

describe("get user", () => {
  test("get user page 2", async () => {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    console.log(response);
  });
});
