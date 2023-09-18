const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://ely:NUKNQrs256pOxjYd@karbakar.jevgmsf.mongodb.net/";
mongoose
  .connect(dbUrl)
  .then(() => console.log("Server Connected To DB Successfully"))
  .catch((err) => console.log(err));
