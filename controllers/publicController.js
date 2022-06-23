const { Product, User } = require("../models");

const publicController = {
  homeView: async (req, res) => {
    const featuredProducts = await Product.findAll({ where: { featured: 1 } });
    res.json(featuredProducts);
  },
  categoryView: async (req, res) => {
    const categoryProducts = await Product.findAll({
      where: { categoryId: req.params.id },
    });
    res.json(categoryProducts);
  },
  productView: async (req, res) => {
    const product = await Product.findOne({ where: { slug: req.params.slug } });
    res.json(product);
  },
  register: async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user) {
      res.json("usuario ya existe");
    } else {
      const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: req.body.password,
      });
      const allUsers = await User.findAll();
      res.json(allUsers);
    }
  },
};

module.exports = publicController;
