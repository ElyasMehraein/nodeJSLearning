const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const path = require("path");
const viewsPath = require("./utils/viewsPath");

const { teachersModel, teacherModel } = require("./models/teacher");
const coursesModel = require("./models/course");
const coursesRouter = require("./routes/courses");
const commentsModel = require("./models/comment");
const sessionsModel = require("./models/session");

require("./configs/db");

const upload = multer({ dest: "uploads/" });

const app = express(); // server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/", upload.single("profile"), async (req, res) => {
  console.log(req.file);
  res.json(req.file);
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(viewsPath, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(viewsPath, "contact.html"));
});

app.use("/api/users/", usersRouter);
app.use("/api/books/", booksRouter);
app.use("/api/courses/", coursesRouter);

app.use((req, res, next) => {
  // return res.status(404).sendFile(path.join(viewsPath, "404.html"));

  return res.status(404).json({
    error: {
      type: "Not Found",
      message: "404 test msg",
    },
  });
});

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
