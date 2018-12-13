const express = require("express");
const router = express.Router();
const User = require("../db/users");

module.exports = function(passport) {
  router.post("/createaccount", function(req, res) {
    const body = req.body,
      username = body.username,
      password = body.password;
    User.findOne({ username: username }, function(err, doc) {
      if (err) {
        res.status(500).send("error ocurred");
      } else {
        if (doc) {
          res.status(500).send("Username already exists");
        } else {
          const record = new User();
          record.username = username;
          record.password = record.hashPassword(password);
          record.save(function(err, user) {
            if (err) {
              res.status(500).send("db error");
            } else {
              res.send(user);
            }
          });
        }
      }
    });
  });

  router.post("/login", passport.authenticate("local" ,{
    failureRedirect: "./login",
    successRedirect: "/profile",
  }), function(req, res){
      res.send("It works")
  })
  return router;
};
