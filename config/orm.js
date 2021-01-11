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
    updateOne: (table, idVal, callback)=>{
      var queryString = "UPDATE ?? SET devoured = 1 WHERE id = ?"
  
      connection.query(queryString, [table, idVal], (err,data)=>{
        if (err) { console.log("ERROR: ", err.stack)}
        callback(data)
      })
    },
  //   //Delete
  //   deleteOne: function(id, callback) {
  //     var queryString = "DELETE FROM burgers WHERE " + id + ";";
  //     connection.query(queryString, [id], function(err, res) {
  //         if (err) throw err;
  //         callback(res);
  //     });
  // },

    // Delete a burger from the db.
    deleteOne: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);

      connection.query(queryString, function(err, result) {
          if (err) {
              throw err
          }
          cb(result);
      });
    }


}
  

module.exports = orm;