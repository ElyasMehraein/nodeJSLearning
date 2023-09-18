const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");

require("./configs/db");

const app = express(); // server
// app.use(express.json());
// app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users/", usersRouter);

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
