const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    first_name: { type: String},
    last_name: { type: String},
    phone_number: { type: String, unique: true, sparse: true, index: true },
    username: { type: String, unique: true, sparse: true, index: true },
    password: String,
    email: { type: String, unique: true, sparse: true, index: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("User", schema);
