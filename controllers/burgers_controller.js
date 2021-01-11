var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// GET REQUEST
router.get("/", (req, res)=>{
  burger.selectAll((data)=>{
    // holds burger data
    var newBurger = {
      burgers: data
    }
    //renders index.handlebars
    res.render("index", newBurger);
  });
});

//REQUEST - Create
router.post("/insertOne", (req,res)=>{
    //passes data into HTML         
  burger.insertOne(req.body.burger_name, function (cheese) {
    //redirects it to main page
    res.redirect("/")
    });
});

//REQUEST - Update
router.post("/updateOne/:id", function (req, res) {
  // holds burgers being devoured 
  var condition = "id = " + req.params.id;
  burger.updateOne({
    // Use updateOne from burger.js
    devoured: req.body.devoured
  },condition, function () {
      //redirects it to main page                         
    res.redirect("/");
  });
});

//REQUEST - Delete
router.post("/deleteOne/:id", function (req, res) {
  // holds burger being deleted     
  var condition = "id = " + req.params.id;
  console.log(condition)
  // Redirect to the homepage                 
  burger.deleteOne(condition, function () {
      res.redirect("/");
  });
});

module.exports = router;         
