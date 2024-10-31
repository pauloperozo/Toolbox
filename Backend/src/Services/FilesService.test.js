/*
  run test: npx jest FilesService.test.js
*/

const { FilesService } = require("./FilesService");

describe("HttpRepository", () => {
  let _filesService;

  beforeEach(() => {
    _filesService = new FilesService();
  });

  describe("Test FilesService", () => {
    it("should [getList] return Array file", async () => {
      const files = await _filesService.getList();
      expect(files.length > 0).toBe(true);
    });

    it("should [getContent] return single text", async () => {
      const file = "test1.csv";
      const content = await _filesService.getContent(file);
      expect(content.length > 0).toBe(true);
    });

    it("should [csvToArray] return Object", async () => {
      const content =
        "file,text,number,hex\ntest2.csv,ZIppW\ntest2.csv,IOyRofbtBcKppVDlaRKoLQCAq,6479265,6dd27efe66076b458b69e40bbdac5ee1";
      const response = await _filesService.csvToArray(content);
      expect(response).toHaveLength(2);
      const row = response[0];
      expect(row).toHaveProperty("text");
      expect(row).toHaveProperty("number");
      expect(row).toHaveProperty("hex");
    });
  });
});
