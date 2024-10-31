const axios = require("axios");

class HttpRepository {
  #Request;

  constructor() {
    this.#Request = axios;
  }

  async get(url, headers, params) {
    try {
      const config = {
        params,
        headers,
      };

      const responseRequest = await this.#Request.get(url, config);
      return responseRequest;
    } catch (error) {
      const cause = {
        isError: true,
        message: error?.message || "",
        statusCode: error?.response?.status || 0,
      };
      throw new Error(`Http Repository Error: ${error}`, { cause });
    }
  }
}

module.exports = { HttpRepository };
