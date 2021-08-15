const { Router } = require("express");
const userController = require("./user.controller");
const { makeOrderSchema } = require("./user.schema");
const validateRequest = require("../../middlewares/validateRequest");

const router = Router();
router.post(
  "/order",
  validateRequest(makeOrderSchema, "body"),
  userController.placeOrderController
);



module.exports = router;
