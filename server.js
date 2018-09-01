const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const app = express();

const routes = require("./routes");

app.use(logger("dev"));

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
//connect to DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrapechojs";

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true
  }
);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
