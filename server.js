//import relevant packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//set up express app
const app = express();

//set up port to access server
const PORT = process.env.PORT || 8000;

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
