const express = require("express");
const imageRouter = express.Router();

const { show, store, destroy } = require("../../controllers/admin/imageController");

imageRouter.get("/images", show);
imageRouter.post("/images", store);
imageRouter.delete("/images/:id", destroy);

module.exports = imageRouter;
