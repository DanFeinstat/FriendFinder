//import json data object
// var friends = require("/../data/friends.js");
const path = require("path");

const friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
    console.log(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    //take user's form data and push it to friendsArray
    //compare it to all other friend options
    //return best match
    friendsData.push(req.body);
    res.json(true);
    console.log(friendsData);
  });
};
