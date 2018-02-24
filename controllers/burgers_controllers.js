// inside the burgers_controller.js file, import the following:

// Express
// burger.js


var express = require ('express');
var burger = require("./burger.js");
var router = express.Router();
// var db = require('./models');

// Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res) {
	db.Burger.findAll({
	}).then(function(Burgerdb) {
		var hndbsObject = {
			burgers: Burgerdb
		};
		console.log(hndbsObject);
		res.render("index", hndbsObject);
	});
});

router.post("/", function(req, res) {
	console.log(req.body.burger_name);
	db.Burger.create({
		burger_name: req.body.burger_name,
		devoured: req.body_devoured
	}).then(function(data) {
		res.redirect("/");
		});
		
	});

router.put("/:id", function(req, res) {
	db.Burger.update({
		devoured: true
	},
	{
		where: {id:req.params.id}
	}).then(function(data) {
		res.redirect("/");
	});
});

module.exports = router;
// Export the ORM object in module.exports.
module.exports = //;