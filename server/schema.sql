CREATE DATABASE yelp;

CREATE TABLE restaurants(
  id BIGSERIAL NOT NULL,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <= 5),
  PRIMARY KEY(id)
);

CREATE TABLE reviews(
  id BIGSERIAL NOT NULL,
  restaurant_id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL CHECK(rating >=1 AND rating <= 5),
  PRIMARY KEY(id),
  FOREIGN KEY(restaurant_id) REFERENCES restaurants(id)
);

CREATE INDEX restaurant_id_idx ON reviews(restaurant_id ASC);