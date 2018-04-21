//import json data object
const friendsArray = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    //take user's form data and push it to friendsArray
    //compare it to all other friend options
    //return best match
    newUser = req.body;
  });
};
