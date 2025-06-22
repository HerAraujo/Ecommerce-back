const express = require("express");
const userRouter = express.Router();

const { store, login, update } = require("../../controllers/shop/userController");

userRouter.post("/users", store);
userRouter.post("/tokens", login);
userRouter.patch("/users", update);
// userRouter.use(checkToken({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));

module.exports = userRouter;
