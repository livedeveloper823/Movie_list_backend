const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: Buffer,
  },
  publishingYear: {
    type: Number,
  },
});

module.exports = Videos = mongoose.model("videos", VideoSchema)
