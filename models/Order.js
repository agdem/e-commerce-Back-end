module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
      },
      payment_method: {
        type: DataTypes.STRING,
        defaultValue: "Credit Card",
      },
      total_USD: {
        type: DataTypes.BIGINT,
      },
    },
    {
      sequelize,
      modelName: "order",
    }
  );

  return Order;
};
