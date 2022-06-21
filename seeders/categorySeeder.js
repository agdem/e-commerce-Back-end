const { Category } = require("../models");

module.exports = async () => {
  const categories = [];

  categories.push(
    {
      name: "coffee",
    },
    {
      name: "tea",
    },
    {
      name: "sweets",
    }
  );

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};
