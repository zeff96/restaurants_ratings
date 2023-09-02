const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ?? 8000;

//Retrive list of all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
  try {
    const results = await db.query(
      'SELECT * FROM restaurants LEFT JOIN(SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id'
    );
    res.status(200).json({
      status: 'success',
      results: results.rowCount,
      restaurants: results.rows,
    });
  } catch (error) {
    res.status(500).json({ detail: error.detail });
  }
});

//Retrieve a given restaurant by id
app.get('/api/v1/restaurants/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      `SELECT * FROM restaurants LEFT JOIN(SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id WHERE restaurants.id = $1`,
      [id]
    );

    //Retrive a list of all reviews for a given restaurant

    const reviews = await db.query(
      `SELECT * FROM reviews  WHERE restaurant_id = $1`,
      [id]
    );

    res.status(200).json({
      status: 'success',
      data: {
        restaurant: result.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (error) {
    res.status(500).json({ detail: error.detail });
  }
});

//create a given restaurant
app.post('/api/v1/restaurants', async (req, res) => {
  const { name, location, price_range } = req.body;
  const query = {
    text: 'INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *',
    values: [name, location, price_range],
  };
  try {
    const result = await db.query(query);
    res.status(201).json({
      status: 'success',
      result: result.rowCount,
      restaurant: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ detail: error.detail });
  }
});

//Update/edit a given restaurant
app.put('/api/v1/restaurants/:id', async (req, res) => {
  const { id } = req.params;
  const { name, location, price_range } = req.body;
  const query = {
    text: 'UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE restaurants.id = $4 RETURNING *',
    values: [name, location, price_range, id],
  };
  try {
    const result = await db.query(query);
    res.status(200).json({
      status: 'Restaurant updated successfully!',
      result: result.rowCount,
      restaurant: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ detail: error.detail });
  }
});

//Delete a given restaurant
app.delete('/api/v1/restaurants/:id', async (req, res) => {
  const { id } = req.params;
  const query = {
    text: 'DELETE FROM restaurants WHERE restaurants.id = $1',
    values: [id],
  };
  try {
    const result = await db.query(query);
    res.status(200).json({ status: 'Restaurant deleted successfully!' });
  } catch (error) {
    res.status(500).json({ detail: error.detail });
  }
});

//Create a review for a given restaurant
app.post('/api/v1/restaurants/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { name, review, rating } = req.body;

  const query = {
    text: 'INSERT INTO reviews(restaurant_id, name, review, rating) VALUES($1, $2, $3, $4) RETURNING *',
    values: [id, name, review, rating],
  };

  try {
    const result = await db.query(query);
    res.status(201).json({
      status: 'Review created successfully',
      data: {
        review: result.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json({ detail: error.detail });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
