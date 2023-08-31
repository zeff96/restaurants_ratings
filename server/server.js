const express = require('express');
const app = express();

const PORT = process.env.PORT ?? 8000

//Retrive list of all restaurants
app.get('/api/v1/restaurants', (req, res) => {
  res.json({ restaurants: { name: 'Macdonalds', location: 'Miami', price_range: 3}})
});

//Retrieve a given restaurant by id
app.get('/api/v1/restaurants/:id', (req, res) => {
  res.json({ restaurants: { id: 1, name: 'Tatu Restaurant', location: 'Mkahawa', price_range: 3}})
});

//create a given restaurant
app.post('/api/v1/restaurants', (req, body) => {

});

//Update/edit a given restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
  res.json({ restaurants: { id: 1, name: 'Tatu Restaurant', location: 'Mkahawa', price_range: 3}})
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});