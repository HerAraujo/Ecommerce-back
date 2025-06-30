const { Product } = require("../../models");
const { Category } = require("../../models");

async function showFeaturedProducts(req, res) {
  try {
    const products = await Product.findAll({
      where: {
        featured: true,
      },
    });
    products.length === 0 ? res.status(404).json({ message: "No featured products found" }) : res.json(products);
  } catch (err) {
    res.status(500).json({ message: `An error has occurred looking for featured products: ${err.message}` });
  }
}

async function showProduct(req, res) {
  try {
    const product = await Product.findOne({
      where: { slug: req.params.slug },
      include: [{ model: Category }],
    });
    product ? res.status(404).json({ message: `Product ${req.params.slug} not found` }) : res.json(product);
  } catch (err) {
    res.status(500).json({ message: `An error has occurred looking for product: ${err.message}` });
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
    res.status(500).json({ message: `An error has occurred looking for products by category: ${err.message}` });
  }
}

module.exports = { showFeaturedProducts, showProduct, showProductsByCategory };
