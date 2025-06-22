const { Order } = require("../models");

module.exports = async () => {
  const orders = [
    {
      orderStatusId: 2,

      address: {
        street: "5th Avenue",
        portNumber: "542",
        apartmentNumber: "104",
        city: "New York",
      },
      products: [
        { id: 1, name: "Blonde Ale", price: "4.51", quantity: 2 },
        { id: 3, name: "Golden Strong Ale", price: "2.99", quantity: 6 },
        { id: 20, name: "American Wheat", price: "3.58", quantity: 4 },
      ],

      userId: 1,
    },

    {
      orderStatusId: 2,

      address: {
        street: "Brick lane",
        portNumber: "1400",
        city: "London",
      },
      products: [
        { id: 4, name: "Pale Ales", price: "5.65", quantity: 6 },
        { id: 23, name: "Dunkelweizen", price: "2.58", quantity: 6 },
      ],

      userId: 2,
    },
  ];

  await Order.bulkCreate(orders);
};
