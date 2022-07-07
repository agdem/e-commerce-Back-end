const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const { from } = require("formidable/src/parsers/Dummy");
const db = require("../models");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

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
    const products = await Product.findAll({
      order: [["categoryId", "DESC"]],
      include: Category,
    });
    res.json(products);
  },
  adminDeleteProduct: async (req, res) => {
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id },
    });
    const allProducts = await Product.findAll({
      order: [["categoryId", "DESC"]],
      include: Category,
    });
    res.json(allProducts);
  },
  adminCreateProduct: async (req, res, next) => {
    const form = formidable({ multiples: true, keepExtensions: true });
    // console.log("form");
    // console.log(form);
    form.parse(req, async (err, fields, files) => {
      console.log(files);
      const ext = path.extname(files.image.filepath);
      const newFileName = `image_${Date.now()}${ext}`;
      const { data, error } = await supabase.storage
        .from("product-images")
        .upload(newFileName, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
        });
      // console.log(data);
      const createProduct = await Product.create({
        name: fields.name,
        image: data.Key,
        featured: fields.featured,
        price: fields.price,
        description: fields.description,
        stock: fields.stock,
        slug: fields.slug,
        categoryId: fields.categoryId,
      });
      res.json(createProduct);
    });
  },
  adminEditProduct: async (req, res) => {
    const form = formidable({ multiples: true, keepExtensions: true });

    form.parse(req, async (err, fields, files) => {
      console.log(fields);
      const ext = path.extname(files.image.filepath);
      const newFileName = `image_${Date.now()}${ext}`;
      const { data, error } = await supabase.storage
        .from("product-images")
        .upload(newFileName, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
        });
      const editProduct = await Product.update(
        {
          id: req.params.id,
          name: fields.name,
          image: data.Key,
          featured: fields.featured,
          price: fields.price,
          description: fields.description,
          stock: fields.stock,
          slug: fields.slug,
          categoryId: fields.categoryId,
          // slug: req.body.slug,
          // categoryId: req.body.category,
        },

        {
          where: {
            id: req.params.id,
          },
          returning: true,
        }
      );
      const allProducts = await Product.findAll({
        order: [["categoryId", "DESC"]],
        include: Category,
      });
      console.log(editProduct);
      res.json(allProducts);
    });
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
    const categories = await Category.findAll();
    res.json(categories);
  },
  adminCreateCategory: async (req, res) => {
    const createCategory = await Category.create({
      name: req.body.name,
    });
    res.json(createCategory);
  },
  adminEditCategory: async (req, res) => {
    const editCategory = await Category.update(
      {
        id: req.params.id,
        name: req.body.name,
      },
      { where: { id: req.params.id } }
    );
    const categories = await Category.findAll();
    res.json(categories);
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
  createAdmin: async (req, res) => {
    const newAdmin = await Admin.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(newAdmin);
  },

  editAdmin: async (req, res) => {
    const editAdmin = await Admin.update(
      {
        id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      },
      { where: { id: req.params.id } }
    );
    console.log(editAdmin);
    const allAdmins = await Admin.findAll();
    res.json(allAdmins);
  },

  adminViewOrder: async (req, res) => {
    const orders = await Order.findAll();
    res.json(orders);
    console.log(orders);
  },

  createOrder: async (req, res) => {
    console.log("entre al rutaaaaa");
    console.log(req.body);
    const newOrder = await Order.create({
      total: req.body.total,
      product: req.body.product,
      userId: req.body.userId,
    });

    res.json(newOrder);
  },
  userOrders: async (req, res) => {
    const userOrders = await Order.findAll({
      where: { userId: req.params.id },
    });
    res.json(userOrders);
  },
  allUsers: async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  },
  resetDB: async (req, res) => {
    await db.sequelize.sync({ force: true });
    await require("../seeders/userSeeder")();
    await require("../seeders/adminSeeder")();
    await require("../seeders/categorySeeder")();
    await require("../seeders/productSeeder")();
    await require("../seeders/orderSeeder")();
    await require("../seeders/order_productSeeder")();

    res.json("OK");
  },
  editedProduct: async (req, res) => {
    const editedProduct = await Product.findOne({
      where: { id: req.params.id },
    });
    res.json(editedProduct);
  },
};

module.exports = privateController;
