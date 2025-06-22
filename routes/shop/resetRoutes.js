const express = require("express");
const resetRouter = express.Router();

const { resetAll } = require("../../controllers/shop/resetController");

resetRouter.post("/resets/all", resetAll);

module.exports = resetRouter;
