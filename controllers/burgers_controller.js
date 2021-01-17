var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// GET route
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

// CREATE route
router.post("/insertOne", (req,res)=>{
    //passes data into HTML         
  burger.insertOne(req.body.burger_name, function (cheese) {
    //redirects it to main page
    res.redirect("/")
    });
});

//Update route
router.put("/updateOne/:id", (req,res)=>{   
  burger.updateOne(req.params.id, function (res) {
  //redirects it to main page
  res.redirect("/")
  if (result.changedRows === 0) {
               return res.status(404)
         }
  });
});



// router.put("updateOne/:id", function(req, res) {
//   burger.updateOne(
//       req.params.id,
//       function(result) {
//           
//           res.status(200)
//       }
//   )
// })


module.exports = router;         
