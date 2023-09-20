const mongoose = require("mongoose");
const { teachersSchema } = require("./teacher");

const commentsModel = mongoose.model(
  "Comment",
  new mongoose.Schema({
    body: {
      type: String,
      required: true,
    },
  })
);

module.exports = commentsModel;
