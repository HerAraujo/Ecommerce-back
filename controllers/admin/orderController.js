const { Order, OrderStatus, User } = require("../../models");

async function show(req, res) {
  try {
    const orders = await Order.findAll({ order: [["updatedAt", "DESC"]] });

    res.json(orders);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

async function showOne(req, res) {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [{ model: User, attributes: { exclude: ["password"] } }, { model: OrderStatus }],
    });
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

async function updateStatus(req, res) {
  try {
    const order = await Order.findByPk(req.params.id);
    await order.update({ orderStatusId: req.body.orderStatusId });
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

module.exports = { show, showOne, updateStatus };
