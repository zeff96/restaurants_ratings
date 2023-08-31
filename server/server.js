const express = require('express');
require('dotenv').config();
const db = require('./db')
const app = express();

app.use(express.json());

const PORT = process.env.PORT ?? 8000

//Retrive list of all restaurants
app.get('/api/v1/restaurants', async(req, res) => {
  try {
    const restaurants = await db.query("SELECT * FROM restaurants");
    res.json(restaurants.rows)
  } catch (error) {
    console.log("Error", error);
  }
});

//Retrieve a given restaurant by id
app.get('/api/v1/restaurants/:id', (req, res) => {
  res.json({ restaurants: { id: 1, name: 'Tatu Restaurant', location: 'Mkahawa', price_range: 3}})
});

//create a given restaurant
app.post('/api/v1/restaurants', (req, res) => {
  console.log(req.body);
});

//Update/edit a given restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body)
});

//Delete a given restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
  res.json({ restaurants: { id: 1, name: 'Tatu Restaurant', location: 'Mkahawa', price_range: 3}})
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});