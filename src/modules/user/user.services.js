const mongoose = require("mongoose");
const User = require("../models/user.model");
const { publishToQueue } = require("../../helpers/broker/publish");

exports.placeOrder = async (data) => {
  try {
   
    publishToQueue(data);
    return {
      error: !user,
      message: "Order placed successfuly",
      data: order,
    };
  } catch (err) {
    console.log(err?.response?.data || err);
    return {
      error: true,
      message: "Error placing order",
      data: err?.response?.data || err,
    };
  }
};

