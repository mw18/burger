// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//call the ORM functions using burger specific input for the ORM

var burger = {
    selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(newBurger, callback) {
      orm.insertOne("burgers", "burger_name", newBurger, function(res) {
        callback(res);
      });
    },
    //update function
    updateOne: function(colVal, id, callback) {
      orm.updateOne(colVal, id, function(res) {
          callback(res);
        });
    },
    //delete function
    deleteOne: function(id, callback) {
        orm.deleteOne(id, function(res) {
            callback(res);
        });
    }
}; 

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
