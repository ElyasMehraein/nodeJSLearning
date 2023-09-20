const mongoose = require("mongoose");
const { teachersSchema } = require("./teacher");

const coursesModel = mongoose.model("Course", {
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: teachersSchema,
  },
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = coursesModel;

// Reference
// Embedded

// [
//   {}, {}, {}
// ]
