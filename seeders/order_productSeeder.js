const { Order_Product } = require("../models");

module.exports = async () => {
  const orders_products = [];

  orders_products.push({
    orderId: 1,
    productId: 2,
    product_quantity: 8,
  });

  await Order_Product.bulkCreate(orders_products);
  console.log("[Database] Se corrió el seeder de Orders_Products.");
};
