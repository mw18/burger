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
    insertOne: (table, columnName, newValue, callback)=>{
      var queryString = "INSERT INTO ?? (??) VALUES (?);";
  
      connection.query(queryString, [table, columnName, newValue] ,(err,data)=>{
        if (err) {console.log("ERROR: ", err.stack)}
        callback(data)
      })
    },
    updateOne: (tableName, idVal, callback)=>{
      var queryString = "UPDATE ?? SET devoured = 1 WHERE id = ?"
  
      connection.query(queryString, [tableName, idVal], (err,data)=>{
        if (err) { console.log("ERROR: ", err.stack)}
        callback(data)
      })
    },
  
  }
  
  



module.exports = orm;