import React, { useContext, useEffect } from 'react';
import Restaurants from '../apis/Restaurants';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate } from 'react-router-dom';
import StarRatings from './StarRatings';

function ListRestaurants() {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const navigate = useNavigate();

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

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  };

  const handleDetailsPage = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    const response = await Restaurants.delete(`/${id}`);
    setRestaurants(
      restaurants.filter((restaurant) => {
        return restaurant.id !== id;
      })
    );
  };

  const renderRatings = (restaurant) => {
    if (!restaurant.count) {
      return <span className='text-warning'>0 reviews</span>;
    }
    return (
      <>
        <StarRatings rating={restaurant.id} />
        <span className='text-warning'>({restaurant.count})</span>
      </>
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
              <tr
                key={restaurant.id}
                onClick={(e) => handleDetailsPage(restaurant.id)}
              >
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{'$'.repeat(restaurant.price_range)}</td>
                <td>{renderRatings(restaurant)}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-warning'
                    onClick={(e) => handleUpdate(e, restaurant.id)}
                  >
                    UPDATE
                  </button>
                </td>
                <td>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={(e) => handleDelete(e, restaurant.id)}
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
