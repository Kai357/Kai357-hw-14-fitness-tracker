const morgan = require("morgan");
const mongoose = require("mongoose");
const express = require("express");
const htmlroutes = require("./routes/htmlroutes.js");
const Port = 3222;
const App = express();
App.use(morgan("dev"));
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(express.static("public"));
App.use(htmlroutes);
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
App.listen(Port, () => {
  console.log(`App running on port: ${Port}`);
});
