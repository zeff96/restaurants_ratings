const express = require('express');
require('dotenv').config();
const db = require('./db')
const app = express();

app.use(express.json());

const PORT = process.env.PORT ?? 8000

//Retrive list of all restaurants
app.get('/api/v1/restaurants', async(req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      status: "success",
      results: results.rowCount,
      data: {
        restaurants: results.rows
      }
    });
  } catch (error) {
    res.status(500).json({ detail: error.detail });
  }
});

//Retrieve a given restaurant by id
app.get('/api/v1/restaurants/:id', async(req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(`SELECT * FROM restaurants  WHERE restaurants.id = $1`, [id]);
    res.status(200).json({
      status: 'success',
      result: result.rowCount,
      data: {
        restaurant: result.rows[0]
      }
    })
  } catch (error) {
    res.status(500).json({ detail: error.detail });
  }
});

//create a given restaurant
app.post('/api/v1/restaurants', async(req, res) => {
  const { name, location, priceRange } = req.body;
  const query = {
    text: 'INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *',
    values: [name, location, priceRange]
  }
  try {
    const result = await db.query(query);
    res.status(200).json({
      status: 'success',
      result: result.rowCount,
      data: {
        restaurant: result.rows[0]
      }
    });
  } catch (error) {
    res.status(500).json({ detail: error.detail });
  }
});

//Update/edit a given restaurant
app.put('/api/v1/restaurants/:id', async(req, res) => {
  const { id } = req.params;
  const { name, location, priceRange } = req.body;
  const query = {
    text: 'UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE restaurants.id = $4 RETURNING *',
    values: [name, location, priceRange, id]
  }
  try {
    const result = await db.query(query);
    res.status(200).json({
      status: 'success',
      result: result.rowCount,
      data: {
        restaurant: result.rows[0]
      }
    });
  } catch (error) {
    res.status(500).json({ detail: error.detail });
  }
});

//Delete a given restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
  res.json({ restaurants: { id: 1, name: 'Tatu Restaurant', location: 'Mkahawa', price_range: 3}})
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});