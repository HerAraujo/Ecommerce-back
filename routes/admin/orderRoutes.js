const express = require("express");
const orderRouter = express.Router();

const { show, showOne, updateStatus } = require("../../controllers/admin/orderController");

orderRouter.get("/orders", show);
orderRouter.get("/orders/:id", showOne);
orderRouter.put("/orders/:id", updateStatus);

module.exports = orderRouter;
