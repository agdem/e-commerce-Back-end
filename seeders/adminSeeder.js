const { Admin } = require("../models");

module.exports = async () => {
  const admins = [];

  admins.push({
    firstName: "Admin",
    lastName: "Admin",
    email: "admin@admin.com",
    password: "1234",
  });

  await Admin.bulkCreate(admins);
  console.log("[Database] Se corrió el seeder de Admins.");
};
