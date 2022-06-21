const { Order } = require("../models");

module.exports = async () => {
  const orders = [];

  orders.push({
    status: "delivered",
    total_USD: 300,
    userId: 1,
  });

  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
