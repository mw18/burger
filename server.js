// require express
const express = require('express');
// require express-handlebars
const exphbs  = require('express-handlebars');

//An instance of the express app
const app = express();
// local host / Heroku port 
var PORT = process.env.PORT || 8080;
console.log("Server Connected")

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars run using main for content
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.set('view engine', 'handlebars');

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, ()=>{
    console.log("Server listening on: http://localhost:" + PORT);
})