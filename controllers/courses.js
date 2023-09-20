const coursesModel = require("./../models/course");

exports.getAll = async (req, res) => {
  const courses = await coursesModel.find({}).select("-__v -teacher.__v");
  res.json(courses);
};
