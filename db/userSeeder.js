const { User } = require("../models");

module.exports = async () => {
  const users = [
    {
      firstname: "User",
      lastname: "User",
      email: "user@gmail.com",
      password: "user",
      phone: "3657896",
    },
    {
      firstname: "Norah",
      lastname: "Jones",
      email: "nj@gmail.com",
      password: "user",
      phone: "3657896",
    },
  ];

  await User.bulkCreate(users);
};
