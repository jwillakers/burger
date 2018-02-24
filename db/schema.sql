-- Write SQL queries this file that do the following:

-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:

-- id: an auto incrementing int that serves as the primary key.

-- burger_name: a string.

-- devoured: a boolean.
DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;
USE burgers;

CREATE TABLE burgers (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR( 255) NOT NULL,
  devoured BOOLEAN NOT NULL,

  PRIMARY KEY (id)
  );
