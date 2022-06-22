const publicRoutes = require("./publicRoutes");
const adminPrivateRoutes = require("./adminPrivateRoutes");
const userPrivateRoutes = require("./userPrivateRoutes");

module.exports = (app) => {
  app.use("/user", userPrivateRoutes);
  app.use("/admin", adminPrivateRoutes);
  app.use(publicRoutes);
};
