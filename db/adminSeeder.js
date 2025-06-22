const { Admin } = require("../models");

module.exports = async () => {
  const admins = [
    {
      firstname: "admin",
      lastname: "admin",
      email: "admin@gmail.com",
      password: "admin",
    },
  ];

  await Admin.bulkCreate(admins);
};
