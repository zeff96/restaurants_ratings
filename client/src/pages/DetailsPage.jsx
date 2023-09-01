import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Restaurants from '../apis/Restaurants';
import { RestaurantsContext } from '../context/RestaurantsContext';

const DetailsPage = () => {
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Restaurants.get(`/${id}`);
        setSelectedRestaurant(response.data.restaurant);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='fw-light display-1 text-center'>
        {selectedRestaurant && selectedRestaurant.name}
      </h1>
    </div>
  );
};

export default DetailsPage;
