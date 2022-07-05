module.exports = (sequelize, Model, DataTypes) => {
  class Order_Product extends Model {}

  Order_Product.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      product_quantity: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "order_product",
    }
  );

  return Order_Product;
};
