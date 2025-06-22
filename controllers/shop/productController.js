const { Product } = require("../../models");
const { Category } = require("../../models");

async function showFeaturedProducts(req, res) {
  try {
    const products = await Product.findAll({
      where: {
        featured: true,
      },
    });
    res.json(products);
  } catch (err) {
    res.status(404).json({ message: `An error has ocurred` });
  }
}

async function showProduct(req, res) {
  try {
    const product = await Product.findOne({
      where: { slug: req.params.slug },
      include: [{ model: Category }],
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: `Product ${req.params.slug} not found` });
    }
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

async function showProductsByCategory(req, res) {
  try {
    const products = await Product.findAll({
      where: {
        categoryId: req.params.id,
      },
    });

    products.length > 0
      ? res.json(products)
      : res.status(404).json({ message: `Category ${req.params.id} has not products` });
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

module.exports = { showFeaturedProducts, showProduct, showProductsByCategory };
