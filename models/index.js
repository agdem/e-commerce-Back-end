const { Sequelize, Model, DataTypes } = require("sequelize");
const mysql = require("mysql2");
const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    // dialectModule: require("pg"),
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

// probar conexion
// sequelize.authenticate().then(() => {
//   console.log("se ha establecido una conexion");
// })

const User = require("./User")(sequelize, Model, DataTypes);
const Admin = require("./Admin")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const Order = require("./Order")(sequelize, Model, DataTypes);
const Order_Product = require("./Order_Product")(sequelize, Model, DataTypes);

// Luego de definir los modelos, se pueden establecer relaciones
// entre los mismos...IMPORTANTE
Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: Order_Product });
Product.belongsToMany(Order, { through: Order_Product });

module.exports = {
  sequelize,
  User,
  Admin,
  Category,
  Product,
  Order,
  Order_Product,
};
