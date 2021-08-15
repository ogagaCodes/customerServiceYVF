const { Router } = require("express");
const sendOrder = require("./user/user.routes");

module.exports = () => {
  const router = Router();

  router.use("/", sendOrder);
  return router;
};
