const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.makeOrderSchema = Joi.object({
  amount: Joi.number().positive().required(),
  product_name: Joi.string().required(),
  quantity: Joi.number().required(),
  email: Joi.string().trim().email().required(),
});
