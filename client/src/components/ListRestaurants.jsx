import React, { useContext, useEffect } from 'react';
import Restaurants from '../apis/Restaurants';
import { RestaurantsContext } from '../context/RestaurantsContext';

function ListRestaurants() {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Restaurants.get('/');
        setRestaurants(response.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const response = await Restaurants.delete(`/${id}`);
    setRestaurants(
      restaurants.filter((restaurant) => {
        return restaurant.id !== id;
      })
    );
  };

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
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{'$'.repeat(restaurant.price_range)}</td>
                <td></td>
                <td>
                  <button type='button' className='btn btn-warning'>
                    UPDATE
                  </button>
                </td>
                <td>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => handleDelete(restaurant.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListRestaurants;
