const { Order, OrderStatus, Product } = require("../../models");

async function store(req, res) {
  try {
    const orderStatus = await OrderStatus.findOne({ where: { name: "PAID" } });

    const order = await Order.create({
      address: req.body.address,
      products: req.body.products,
      userId: req.user.sub,
      orderStatusId: orderStatus.id,
    });

    for (const product of req.body.products) {
      const productToUpdate = await Product.findByPk(product.id);
      const newStock = productToUpdate.stock - product.quantity;
      await productToUpdate.update({ stock: newStock });
    }

    res.json(order);
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

// async function show(req, res) {
//   try {
//     const order = await Order.findAll();
//     res.json(order);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function destroy(req, res) {
//   try {
//     const order = await Order.findByPk(req.params.id);
//     if (order) {
//       await Order.destroy({ where: { id: req.params.id } });

//       res.json({ message: `Order deleted successfully` });
//     } else {
//       res.json({ message: `Order does not exist` });
//     }
//   } catch (err) {
//     res.status(400).json({ message: `An error has ocurred` });
//   }
// }

// async function showOne(req, res) {
//   try {
//     const order = await Order.findByPk(req.params.id);

//     res.json(order);
//   } catch (err) {
//     res.status(400).json({ message: `An error has ocurred` });
//   }
// }

module.exports = { store };
// module.exports = { show, store, destroy, showOne };
