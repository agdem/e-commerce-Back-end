const express = require("express");
const adminPrivateRouter = express.Router();

const privateController = require("../controllers/privateController");

// Rutas del Admin:
adminPrivateRouter.get("/", privateController.adminView);

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
adminPrivateRouter.post(
  "/create-category",
  privateController.adminCreateCategory
);
adminPrivateRouter.delete(
  "/delete-category/:id",
  privateController.adminDeleteCategory
);
adminPrivateRouter.patch(
  "/update-category/:id",
  privateController.adminEditCategory
);

// CRUD admin
adminPrivateRouter.get("/admins", privateController.adminsView);
adminPrivateRouter.post("/create-admin", privateController.createAdmin);
adminPrivateRouter.delete("/delete-admin/:id", privateController.deleteAdmin);
adminPrivateRouter.patch("/update-admin/:id", privateController.editAdmin);

//orders
adminPrivateRouter.get("/orders", privateController.adminViewOrder);

// users
adminPrivateRouter.get("/users", privateController.allUsers);

// reset database
adminPrivateRouter.get("/reset", privateController.resetDB);

module.exports = adminPrivateRouter;
