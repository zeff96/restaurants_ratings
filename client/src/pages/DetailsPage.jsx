import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Restaurants from '../apis/Restaurants';
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRatings from '../components/StarRatings';

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
      {selectedRestaurant && (
        <div>
          <h1 className='fw-light display-1 text-center'>
            {selectedRestaurant.name}
          </h1>
          <>
            <StarRatings rating={2.3} />
          </>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
