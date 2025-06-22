const { Product } = require("../../models");

async function show(req, res) {
  try {
    const products = await Product.findAll({ order: [["updatedAt", "DESC"]] });
    res.json(products);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

async function store(req, res) {
  try {
    const product = await Product.create({
      ...req.body,
      images: [{ name: "no-photo-available.png", title: "no-photo-available" }],
    });
    res.json(product);
  } catch (err) {
    //err.parent.errno === Number(process.env.ERROR_CODE_DUPLICATE_KEY) //mysql
    err.parent.code === process.env.ERROR_CODE_DUPLICATE_KEY //postgre
      ? res.status(409).json({ message: "Product already exists" })
      : res.status(400).json({ message: "An error has ocurred" });
  }
}

async function update(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    product && (await product.update({ ...req.body, id: req.params.id }));
    res.json(product);
  } catch (err) {
    //err.parent.errno === Number(process.env.ERROR_CODE_DUPLICATE_KEY) //mysql
    err.parent.code === process.env.ERROR_CODE_DUPLICATE_KEY //postgre
      ? res.status(409).json({ message: "Product already exists" })
      : res.status(400).json({ message: "An error has ocurred" });
  }
}

async function destroy(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    product && (await product.destroy());
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

async function storeProductImages(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    product && (await product.update({ images: req.body.images }));
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

module.exports = { show, store, update, destroy, storeProductImages };
