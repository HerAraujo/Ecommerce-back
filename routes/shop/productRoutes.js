const express = require("express");
const productRouter = express.Router();

const {
  showFeaturedProducts,
  showProduct,
  showProductsByCategory,
} = require("../../controllers/shop/productController");

productRouter.get("/featured-products", showFeaturedProducts);
productRouter.get("/products/:slug", showProduct);
productRouter.get("/products/:id/category", showProductsByCategory);

module.exports = productRouter;
