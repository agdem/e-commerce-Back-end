const { User } = require("../models");

module.exports = async () => {
  const users = [];

  users.push({
    firstName: "User",
    lastName: "User",
    email: "user@user.com",
    password: "123",
    phone: 099999999,
    address: "calle 123",
  });

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
