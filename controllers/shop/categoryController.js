const { Category, Product } = require("../../models");

async function show(req, res) {
  try {
    const categories = await Category.findAll({
      where: {
        active: true,
      },
    });
    categories.length === 0 ? res.status(404).json({ message: `Categories not found` }) : res.json(categories);
  } catch (err) {
    res. status(500).json({ message: `Error retrieving categories: ${err.message}` });
  }
}

async function showOne(req, res) {
  try {
    const category = await Category.findOne({
      where: { slug: req.params.slug },
      include: Product,
    });
    if (!category) {
      return res.status(404).json({ message: `Category ${req.params.slug} not found` });
    }

    res.json(category);
  } catch (err) {
    res.status(500).json({ message: `Error retrieving category: ${err.message}` });
  }
}

module.exports = { show, showOne };
