const express = require("express");
const categoryRouter = express.Router();

const {
  show,
  store,
  update,
  destroy,
  showOne,
} = require("../../controllers/admin/categoryController");

categoryRouter.get("/categories", show);
categoryRouter.get("/categories/:id", showOne);
categoryRouter.post("/categories", store);
categoryRouter.patch("/categories/:id", update);
categoryRouter.delete("/categories/:id", destroy);

module.exports = categoryRouter;
