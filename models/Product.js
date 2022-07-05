// slugify
const slugify = require("slugify");

module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      featured: {
        type: DataTypes.BOOLEAN,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      stock: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "product",
      hooks: {
        beforeBulkCreate: async (products, options) => {
          for (const product of products) {
            product.slug = await slugify(product.name, {
              replacement: "-",
              lower: true,
            });
          }
        },
        beforeCreate: async (product, options) => {
          product.slug = await slugify(product.name, {
            replacement: "-",
            lower: true,
          });
        },
        beforeUpdate: async (product, options) => {
          product.slug = await slugify(product.name, {
            replacement: "-",
            lower: true,
          });
        },
      },
    }
  );

  return Product;
};
