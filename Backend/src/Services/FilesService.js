const { externalApi } = require("../config");
const { HttpRepository } = require("../Repositories/HttpRepository");

class FilesService {
  #httpRepository;
  #config;

  constructor() {
    this.#httpRepository = new HttpRepository();
    this.#config = externalApi;
  }

  async getList() {
    try {
      const url = `${externalApi.domain}/${externalApi.version}/secret/files`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: this.#config.authorization,
      };

      const response = await this.#httpRepository.get(url, headers);
      return response?.data?.files;
    } catch (error) {
      return { error: true, message: `Service getContent Error` };
    }
  }

  async getContent(file = "") {
    try {
      const url = `${externalApi.domain}/${externalApi.version}/secret/file/${file}`;
      const headers = {
        Authorization: this.#config.authorization,
      };

      const response = await this.#httpRepository.get(url, headers);
      return response?.data;
    } catch (error) {
      return { error: true, message: `Service getContent Error` };
    }
  }

  csvToArray(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split(",");
    const result = lines.slice(1).map((line) => {
      const values = line.split(",");
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index] || null;
      });
      return obj;
    });
    return result;
  }

  arrayFixed(obj) {
    return obj
      .filter((row) => row.text && row.number && row.hex)
      .map((row) => {
        const { text, number, hex } = row;
        return { text, number, hex };
      });
  }
}

module.exports = { FilesService };
