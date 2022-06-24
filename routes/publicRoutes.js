const express = require("express");
const publicRouter = express.Router();
const publicController = require("../controllers/publicController");

// Rutas Públicas:
// ...

// route login-register

// publicRouter.get("/login-register");
publicRouter.post("/login", publicController.login);
publicRouter.post("/register", publicController.register);

// route home
publicRouter.get("/", publicController.homeView);

// route categories
publicRouter.get("/:id", publicController.categoryView);

// route individual product
publicRouter.get("/product/:slug", publicController.productView);

// routes admin
publicRouter.get("/login-admin");
publicRouter.post("/login-admin");

module.exports = publicRouter;
