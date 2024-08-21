const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    default: "user",
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = Users = mongoose.model("users", UserSchema)