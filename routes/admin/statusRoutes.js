const express = require("express");
const statusRouter = express.Router();

const { show, store, update, destroy } = require("../../controllers/admin/statusController");

statusRouter.get("/statuses", show);
statusRouter.post("/statuses", store);
statusRouter.put("/statuses", update);
statusRouter.delete("/statuses", destroy);

module.exports = statusRouter;
