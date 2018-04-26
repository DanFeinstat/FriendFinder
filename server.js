//import relevant packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const exphbs = require("express-handlebars");
const mysql = require("mysql");

//set up express app
const app = express();

//set up port to access server
const PORT = process.env.PORT || 8000;

//set up mysql config
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "friend_finder_db",
});

//connect to database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

//Probably not going to use handlebars to demonstrate ability to do it without
// //set up handlebars
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//start server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//import routing modules and call path functions passing app
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);
