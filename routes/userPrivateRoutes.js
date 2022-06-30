const express = require("express");
const userPrivateRouter = express.Router();

const privateController = require("../controllers/privateController");

// private routes users

// logout user
userPrivateRouter.get("/logout");

// user orders
userPrivateRouter.get("/orders/:id", privateController.userOrders);

// checkout POST este post genera orden en la base de datos
userPrivateRouter.post("/checkout", privateController.createOrder);

module.exports = userPrivateRouter;
