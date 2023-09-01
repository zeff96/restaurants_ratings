import React, { useEffect } from 'react';
import Restaurants from '../apis/Restaurants';

function ListRestaurants() {
  useEffect(async () => {
    try {
      const response = await Restaurants.get('/');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className='table-responsive-sm'>
      <table className='table table-hover table-dark'>
        <thead>
          <tr className='table-primary'>
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default ListRestaurants;
