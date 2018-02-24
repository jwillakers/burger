// Require the following npm packages inside of the server.js file:

// express
// method-override
// body-parser

var express = require ('express');
var methodOverride = require ('method-override');
var bodyParser = require ('body-parser');
// var mysql = require("mysql");
// var inquirer = require("inquirer");
// var Table = require('cli-table2');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// override with POST having method-DE:ETE
app.use(methodOverride("_mothod"));

// Set Handlebars
var exphdbs = require("express-handlebars");
app.engine("handlebars", exphdbs({ defaultLayout: "main"}));
app.set("vie engine", "handlebars");

// Routes
// =============================================================
require("./controllers/burgers_controllers.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  
});
