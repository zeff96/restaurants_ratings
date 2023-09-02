import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Restaurants from '../apis/Restaurants';
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRatings from '../components/StarRatings';
import Reviews from '../components/Reviews';
import AddRatings from '../components/AddRatings';

const DetailsPage = () => {
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Restaurants.get(`/${id}`);
        console.log(response);
        setSelectedRestaurant(response.data);
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
            {selectedRestaurant}
          </h1>
          <>
            <StarRatings rating={2.3} />
          </>
          <Reviews reviews={selectedRestaurant} />
          <AddRatings />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
