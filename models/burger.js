// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using
// burger specific input for the ORM. Export at the end of the burger.js file.

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    id: {
      type: DataTypes.INTEGER,
      // AllowNull is a flag that restricts a burger from being entered if it doesn't
      // have a text value
      allowNull: false,
    },
    burger_name: { //adds new burger name input from user into our burger table
	      type: DataTypes.STRING,
	      // defaultValue is a flag that defaults a new burger complete value to false if
	      // it isn't supplied one
	      defaultValue: false
	      allowNull: false //won't populate unless user enters burger name
	      
		},

		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
  });
  return Burger;
};
