const { Order } = require("../models");

module.exports = async () => {
  const orders = [];

  orders.push({
    status: "delivered",
    total: 300,
    userId: 1,
    product: [{ name: "Black Tea", price: 80, quantity: 5 }],
  });

  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
