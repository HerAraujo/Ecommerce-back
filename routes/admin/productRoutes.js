const express = require("express");
const productRouter = express.Router();

const {
  show,
  store,
  update,
  destroy,
  storeProductImages,
} = require("../../controllers/admin/productController");

productRouter.get("/products", show);
productRouter.post("/products", store);
productRouter.put("/products/:id", update);
productRouter.delete("/products/:id", destroy);
productRouter.post("/products/:id/images", storeProductImages);

module.exports = productRouter;
