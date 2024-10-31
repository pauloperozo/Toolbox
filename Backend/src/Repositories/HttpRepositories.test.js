/*
  run test: npx jest HttpRepositories.test.js
*/

const { HttpRepository } = require("./HttpRepository");

describe("HttpRepository", () => {
  let _httpRepository;

  beforeEach(() => {
    _httpRepository = new HttpRepository();
  });

  describe("Test HttpRepository", () => {
    it("should make a [GET] request and return the response", async () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const headers = {
        "Content-type": "application/json; charset=UTF-8",
      };
      const params = {
        _limit: 1,
      };

      const response = await _httpRepository.get(url, headers, params);

      expect(response.status).toBe(200);
      expect(response.data).toHaveLength(1);

      const row = response.data[0];
      expect(row).toHaveProperty("id");
      expect(row).toHaveProperty("title");
      expect(row).toHaveProperty("body");
      expect(row).toHaveProperty("userId");
    });
  });
});
