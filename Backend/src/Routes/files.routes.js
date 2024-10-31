const { FileController } = require("../Controlllers/FilesController");
const { Router } = require("express");
const router = Router();
router.get("/data", FileController.getData);
router.get("/list", FileController.getList);
module.exports = router;
