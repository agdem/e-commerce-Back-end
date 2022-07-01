const express = require("express");
const app = express();
const { Product, User, Category, Admin } = require("../models");
const jwt = require("jsonwebtoken");
const keys = require("../keys");
const bcrypt = require("bcryptjs");

app.set("key", keys.key);

const publicController = {
  homeView: async (req, res) => {
    const featuredProducts = await Product.findAll({ where: { featured: 1 } });
    res.json(featuredProducts);
  },
  categoryView: async (req, res) => {
    const categoryProducts = await Product.findAll({
      where: { categoryId: req.params.id },
      include: Category,
    });

    res.json(categoryProducts);
  },
  productView: async (req, res) => {
    const product = await Product.findOne({ where: { slug: req.params.slug } });
    res.json(product);
  },
  register: async (req, res) => {
    const [user, created] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        password: req.body.password,
      },
    });
    if (created) {
      const payload = {
        check: true,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);

      res.json({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: user.address,
        token: token,
      });
    } else {
      res.json(created);
    }
  },
  login: async (req, res) => {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      const compare = await bcrypt.compare(req.body.password, user.password);
      if (compare) {
        const payload = {
          check: true,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        res.json({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          address: user.address,
          token: token,
        });
      } else {
        res.json("error");
      }
    } else {
      res.json("error");
    }
  },
  loginAdmin: async (req, res) => {
    const admin = await Admin.findOne({
      where: { email: req.body.email },
    });
    if (admin) {
      const compare = await bcrypt.compare(req.body.password, admin.password);
      if (compare) {
        const payload = {
          check: true,
        };
        const token = jwt.sign(payload, app.get("key"));
        res.json({
          id: admin.id,
          firstName: admin.firstName,
          token: token,
        });
      } else {
        res.json("error");
      }
    } else {
      res.json("error");
    }
  },
};

module.exports = publicController;
