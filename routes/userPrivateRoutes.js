const express = require("express");
const userPrivateRouter = express.Router();

const privateController = require("../controllers/privateController");

// private routes users

// logout user
userPrivateRouter.get("/logout");

// shopping Cart este post genera orden en la base de datos
userPrivateRouter.post("/shopping-cart");

module.exports = userPrivateRouter;
