/*
  run test: npx jest FilesController.test.js
*/

const { FilesService } = require("../Services/FilesService");

class FileController {
  static async getData(req, res) {
    try {
      const { fileName } = req.query;
      const filesService = new FilesService();

      let resultFiles = await filesService.getList();

      if (fileName) {
        resultFiles = resultFiles.filter((file) => file.startsWith(fileName));
      }

      let response = [];
      for (let file of resultFiles) {
        const obj = { file, lines: [] };
        const resultContent = await filesService.getContent(file);
        if (!resultContent.error) {
          const resultConvert = filesService.csvToArray(resultContent);
          const resultFixed = filesService.arrayFixed(resultConvert);
          obj.lines = resultFixed;
        }
        response.push(obj);
      }
      res.json(response);
    } catch (error) {
      const { message } = error;
      res.status(400).json({ message });
    }
  }

  static async getList(req, res) {
    try {
      const filesService = new FilesService();
      const response = await filesService.getList();
      res.json(response);
    } catch (error) {
      const { message } = error;
      res.status(400).json({ message });
    }
  }
}

module.exports = {
  FileController,
};
