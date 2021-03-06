module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "Order confirmed",
      },
      payment_method: {
        type: DataTypes.STRING,
        defaultValue: "Credit Card",
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      product: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "order",
    }
  );

  return Order;
};
