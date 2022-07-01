const publicRoutes = require("./publicRoutes");
const adminPrivateRoutes = require("./adminPrivateRoutes");
const userPrivateRoutes = require("./userPrivateRoutes");
const productRoutes = require("./productRoute");

module.exports = (app) => {
  app.use("/user", userPrivateRoutes);
  app.use("/admin", adminPrivateRoutes);
  app.use("/products", productRoutes);
  app.use(publicRoutes);
};
