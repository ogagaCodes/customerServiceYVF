const mongoose = require("mongoose");
const axios = require('axios').default;
const User = require("../models/user.model");
const { publishToQueue } = require("../../helpers/broker/publish");

exports.placeOrder = async (data) => {
  try {
    // check if user exist
    const user = await User.findOne({ email: data.email });
    if (!user) {
      return {
        error: true,
        message: "User does not exist",
        data: null,
      };
    } else {
      //  send request to order service via rest api
      // publishToQueue(data);
      console.log(data);
      const order = await axios.post(
        process.env.ORDER_SERVICE_URI,
        { data },
        {
          headers: {
            'Content-Type': 'application/json',
        }
        }
      );
      console.log(order.data.code);
      if(order.data.code === 400){
        return {
          error: true,
          message: order.data.message
        }
      }
      return {
        error: false,
        message: "Order placed successfuly",
        data: order.data,
      };
    }
  } catch (err) {
    console.log(err?.response?.data || err);
    return {
      error: true,
      message: "Error placing order",
      data: err?.response?.data || err,
    };
  }
};
