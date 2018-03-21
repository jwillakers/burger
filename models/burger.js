// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using
// burger specific input for the ORM. Export at the end of the burger.js file.

// import orm.js into burger.js
var orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  all: function (callback) {
    orm.selectAll('burgers', function (res) {
      callback(res);
    });
  },
  create: function (col, burger_name, callback) {
    orm.insertOne('burgers', burger_name, function (res) {
      callback(res);
    });
  },
  update: function (objColVals, condition, callback) {
    orm.updateOne('burgers', objColVals, condition, function (res) {
      callback(res);
    });
  }
};

module.exports = burger;