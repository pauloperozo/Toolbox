/*
  run test: npx jest FilesController.test.js
*/

const { FileController } = require("./FilesController");

let res;

beforeEach(() => {
  const mockResponseData = jest.fn();
  res = { json: mockResponseData };
});

describe("Single getData endpoint", () => {
  test("[ GET ] /files/data", async () => {
    const req = {
      query: { fileName: "test2.csv" },
    };

    await FileController.getData(req, res);
    const response = res.json.mock.calls[0][0];
    expect(typeof response).toBe("object");
    expect(response).toHaveLength(1);
    expect(response[0]).toHaveProperty("file");
    expect(response[0]).toHaveProperty("lines");
  });
});
