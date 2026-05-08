const mongoose = require("mongoose");

const userSchema =
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: [
        "SUPER_ADMIN",
        "ORG_ADMIN"
      ]
    },

    organization: {
      type:
        mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    }
  });

module.exports = mongoose.model(
  "User",
  userSchema
);