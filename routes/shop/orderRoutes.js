const express = require("express");
const orderRoutes = express.Router();
const checkToken = require("express-jwt");

const { store } = require("../../controllers/shop/orderController");
// const { show, showOne, store, destroy } = require("../../controllers/shop/orderController");

orderRoutes.use(checkToken({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));
orderRoutes.post("/orders", store);
// orderRoutes.get("/order/", show);
// orderRoutes.delete("/order/:id", destroy);
// orderRoutes.get("/order/:id", showOne);

module.exports = orderRoutes;
