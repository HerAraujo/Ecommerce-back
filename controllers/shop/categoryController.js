const { Category, Product } = require("../../models");

async function show(req, res) {
  try {
    const categories = await Category.findAll({
      where: {
        active: true,
      },
    });
    res.json(categories);
  } catch (err) {
    res.status(404).json({ message: `Categories not found` });
  }
}

async function showOne(req, res) {
  try {
    const category = await Category.findOne({
      where: { slug: req.params.slug },
      include: Product,
    });

    res.json(category);
  } catch (err) {
    res.status(404).json({ message: `Category not found` });
  }
}

module.exports = { show, showOne };
