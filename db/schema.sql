DROP DATABASE IF EXISTS Menu_db;

CREATE DATABASE Menu_db;

USE Menu_db;


CREATE TABLE Login
(
	username VARCHAR(200) NOT NULL ,
	password VARCHAR(200) NOT NULL ,
	PRIMARY KEY (
        username
    )
);

CREATE TABLE CreateAccount
(
	username VARCHAR(200) NOT NULL ,
	password VARCHAR(200) NOT NULL ,
	email VARCHAR(200) NOT NULL
);
CREATE TABLE users
(
	id INT(6) NULL,
	username VARCHAR(200) NOT NULL,
	password VARCHAR(200) NOT NULL

);

CREATE TABLE Entree
(
	id int(6) NOT NULL ,
	name VARCHAR(200) NOT NULL ,
	price int(6) NOT NULL
);

CREATE TABLE Side
(
	id int(6) NOT NULL ,
	name VARCHAR(200) NOT NULL ,
	price int(6) NOT NULL
);

CREATE TABLE Drink
(
	id int(6) NOT NULL ,
	name VARCHAR(200) NOT NULL ,
	price int(6) NOT NULL
);

CREATE TABLE Meals
(
	entree VARCHAR(200) NOT NULL ,
	side VARCHAR(200) NOT NULL ,
	drink VARCHAR(200) NOT NULL ,
	price int(6) NOT NULL
);

ALTER TABLE Entree ADD CONSTRAINT fk_Entree_id FOREIGN KEY(id)
REFERENCES Meals (entree);

ALTER TABLE Side ADD CONSTRAINT fk_Side_id FOREIGN KEY(id)
REFERENCES Meals (side);

ALTER TABLE Drink ADD CONSTRAINT fk_Drink_id FOREIGN KEY(id)
REFERENCES Meals (drink);

