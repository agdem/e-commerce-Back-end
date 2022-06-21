const { User } = require("../models");

module.exports = async () => {
  const users = [];

  users.push(
    {
      firstName: "Leia",
      lastName: "Organa",
      email: "leia@gmail.com",
      password: "123",
      phone: 099123456,
      address: "calle 123",
    },
    {
      firstName: "Han",
      lastName: "Solo",
      email: "han@gmail.com",
      password: "123",
      phone: 099123456,
      address: "calle 123",
    }
  );

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
