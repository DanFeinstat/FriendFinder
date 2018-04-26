//import path
//not sure if this needs to be here
const path = require("path");

//export get requests
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get("/friend-display", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/friendDisplay.html"));
  });
};
