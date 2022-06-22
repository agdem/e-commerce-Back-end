const { Product } = require("../models");

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
};

module.exports = publicController;
