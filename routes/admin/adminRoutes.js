const express = require("express");
const adminRouter = express.Router();
const checkToken = require("express-jwt");

const {
  login,
  show,
  store,
  destroy,
  update,
  showAdmin,
} = require("../../controllers/admin/adminController");

adminRouter.post("/tokens", login);
adminRouter.use(checkToken({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));

adminRouter.get("/", show);
adminRouter.get("/admin/:id", showAdmin);
adminRouter.post("/", store);
adminRouter.delete("/:id", destroy);
adminRouter.patch("/:id", update);

module.exports = adminRouter;
