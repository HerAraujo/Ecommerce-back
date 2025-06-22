const { OrderStatus } = require("../models");

module.exports = async () => {
  const orderStatuses = [
    {
      name: "UNPAID",
    },
    {
      name: "PAID",
    },
    {
      name: "SENT",
    },
    {
      name: "DELIVERED",
    },
  ];

  await OrderStatus.bulkCreate(orderStatuses);
};
