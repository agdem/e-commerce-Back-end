// bcrypt
const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class Admin extends Model {}

  Admin.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "admin",
      hooks: {
        beforeBulkCreate: async (admins, options) => {
          for (const admin of admins) {
            admin.password = await bcrypt.hash(admin.password, 10);
          }
        },
        beforeCreate: async (admin, options) => {
          admin.password = await bcrypt.hash(admin.password, 10);
        },
      },
    }
  );

  return Admin;
};
