const { Admin } = require("../models");

module.exports = async () => {
  const admins = [];

  admins.push(
    {
      firstName: "Maria",
      lastName: "Perez",
      email: "maria@gmail.com",
      password: "123",
    },
    {
      firstName: "Jose",
      lastName: "Garcia",
      email: "jose@gmail.com",
      password: "123",
    }
  );

  await Admin.bulkCreate(admins);
  console.log("[Database] Se corrió el seeder de Admins.");
};
