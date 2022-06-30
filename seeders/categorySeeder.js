const { Category } = require("../models");

module.exports = async () => {
  const categories = [];

  categories.push(
    {
      name: "Coffee",
    },
    {
      name: "Tea",
    },
    {
      name: "Sweets",
    }
  );

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};
