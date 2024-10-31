require("dotenv").config();
const { app } = require("./src/app");
const filesRoutes = require("./src/Routes/files.routes");

(async (_) => {
  const PORT = process?.env.PORT ?? 3000;
  app.use("/files", filesRoutes);
  await app.listen(PORT, () => console.log(`API listen port :${PORT}`));
})();
