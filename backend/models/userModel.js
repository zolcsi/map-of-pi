const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  uid: String,
  role: [String],
  accessToken: String,
  balance: {
    type:Number,default:0
  }
});

module.exports = mongoose.model("User", userSchema);
