// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

    selectAll: (table, callback)=>{
      var queryString = "SELECT * FROM ??;";
  
      connection.query(queryString, [table], (err, res)=>{
        if (err){console.error("ERROR: " + err.stack)}
        callback(res)
      })
    },
    //Insert
    insertOne: (table, columnName, newValue, callback)=>{
      var queryString = "INSERT INTO ?? (??) VALUES (?);";
      connection.query(queryString, [table, columnName, newValue] ,(err,data)=>{
        if (err) {console.log("ERROR: ", err.stack)}
        callback(data)
      })
    },

    //Update
    updateOne: (devoured,cb) =>{
      var queryString = "UPDATE burgers SET devoured= 1 WHERE id =" + (req.params.devoured);
      connection.query(queryString, [devoured, req.params.devoured], function(err, result) {
          if (err) throw err;
          cb(result);
      });
    },






//  //Delete
//    deleteOne: function(id, callback) {
//    var queryString = "DELETE FROM burgers WHERE + id = ?";
//   connection.query(queryString, [id], function(err, res) {
//     if (err) throw err;
//     callback(res);
//    });

//    },


}
  

module.exports = orm;