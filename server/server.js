const express = require('express');
const app = express();

const PORT = process.env.PORT ?? 8000

//Retrive list of all restaurants
app.get('/api/v1/restaurants', (req, res) => {
  res.json({ restaurants: { name: 'Macdonalds', location: 'Miami', price_range: 3}})
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});