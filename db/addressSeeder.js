const { Address } = require("../models");

module.exports = async () => {
  const addresses = [
    {
      userId: 1,
      street: "5th Avenue",
      portNumber: "542",
      apartmentNumber: "104",
      city: "New York",
    },
    {
      userId: 2,
      street: "Brick lane",
      portNumber: "1400",
      city: "London",
    },
    {
      userId: 1,
      street: "Park Avenue",
      portNumber: "964",
      apartmentNumber: "2042",
      city: "New York",
    },
  ];

  await Address.bulkCreate(addresses);
};
