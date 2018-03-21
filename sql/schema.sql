DROP DATABASE silverspoon;

CREATE DATABASE silverspoon;

\c silverspoon;

CREATE TABLE restaurant (
  id int PRIMARY KEY,
  restName text NOT NULL
);

CREATE TABLE menu (
  id int PRIMARY KEY,
  rest_id idnt NOT NULL,
  item text NOT NULL,
  meal text NOT NULL,
  price int NOT NULL
);

CREATE TABLE tags (
  id int PRIMARY KEY,
  menu_id int NOT NULL,
  vegan boolean NOT NULL,
  gluten boolean NOT NULL,
  vegetarian boolean NOT NULL
);

\copy restaurant from 'sql/restName.csv' DELIMITER ',';
\copy menu from 'sql/menu.csv' DELIMITER ',';
\copy tags from 'sql/tags.csv' DELIMITER ',';

CREATE INDEX on restaurant (restName);
