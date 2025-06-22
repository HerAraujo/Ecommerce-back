const { OrderStatus } = require("../../models");

async function show(req, res) {
  try {
    const statuses = await OrderStatus.findAll();
    res.json(statuses);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

async function store(req, res) {
  try {
  } catch (err) {}
}

async function update(req, res) {
  try {
  } catch (err) {}
}

async function destroy(req, res) {
  //if no orders remove. if orders, remove and orders with removed state, asign state previously created (example: removed-state) ¿?
  try {
  } catch (err) {}
}

module.exports = { show, store, update, destroy };
