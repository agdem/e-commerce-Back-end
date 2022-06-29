const express = require("express");
const adminPrivateRouter = express.Router();

const privateController = require("../controllers/privateController");

// Rutas del Admin:
adminPrivateRouter.get("/", privateController.adminView);
adminPrivateRouter.get("/logout");

// CRUD productos
adminPrivateRouter.get("/products", privateController.adminProductsView);
adminPrivateRouter.post(
  "/create-product",
  privateController.adminCreateProduct
);
adminPrivateRouter.delete(
  "/delete-product/:id",
  privateController.adminDeleteProduct
);
adminPrivateRouter.patch(
  "/update-product/:id",
  privateController.adminEditProduct
);

// CRUD categories
adminPrivateRouter.get("/categories", privateController.adminCategoriesView);
adminPrivateRouter.post("/create-category");
adminPrivateRouter.delete(
  "/delete-category/:id",
  privateController.adminDeleteCategory
);
adminPrivateRouter.patch("/update-category/:id");

// CRUD admin
adminPrivateRouter.get("/admins", privateController.adminsView);
adminPrivateRouter.post("/create-admin");
adminPrivateRouter.delete("/delete-admin/:id", privateController.deleteAdmin);
adminPrivateRouter.patch("/update-admin/:id");

module.exports = adminPrivateRouter;
