import React from 'react';
import Header from '../components/Header';
import AddRestaurants from '../components/AddRestaurants';
import ListRestaurants from '../components/ListRestaurants';

const Homepage = () => {
  return (
    <div>
      <Header />
      <AddRestaurants />
      <ListRestaurants />
    </div>
  );
};

export default Homepage;
