const express = require("express");
const categoryRouter = express.Router();

const { show, showOne } = require("../../controllers/shop/categoryController");

categoryRouter.get("/categories", show);
categoryRouter.get("/categories/:slug", showOne);

module.exports = categoryRouter;
