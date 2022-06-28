const {
  Order,
  Product,
  Category,
  Admin,
  User,
  Order_Product,
} = require("../models");

const privateController = {
  adminView: async (req, res) => {
    console.log("hola");
    const orders = await Order.findAll();

    res.json(orders);
  },
  adminProductsView: async (req, res) => {
    const products = await Product.findAll({ order: [["categoryId", "DESC"]] });
    res.json(products);
  },
  adminDeleteProduct: async (req, res) => {
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id },
    });
    const allProducts = await Product.findAll();
    res.json(allProducts);
  },
  adminCategoriesView: async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
  },
  adminDeleteCategory: async (req, res) => {
    const deletedProductsFromCategory = await Product.destroy({
      where: { categoryId: req.params.id },
    });
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });

    const allCategories = await Category.findAll();
    const allProducts = await Product.findAll();
    res.json(allProducts);
  },
  adminsView: async (req, res) => {
    const allAdmins = await Admin.findAll();
    res.json(allAdmins);
  },
  deleteAdmin: async (req, res) => {
    const deletedAdmin = await Admin.destroy({ where: { id: req.params.id } });
    const allAdmins = await Admin.findAll();
    res.json(allAdmins);
  },
  createOrder: async (req, res) => {
    const newOrder = await Order.create({
      total: req.body.total,
      product: req.body.product,
      userId: req.body.userId,
    });
    res.json(newOrder);
  },
};

module.exports = privateController;
