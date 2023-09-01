import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Restaurants from '../apis/Restaurants';

const UpdatePage = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Restaurants.get(`/${id}`);
        setName(response.data.restaurant.name);
        setLocation(response.data.restaurant.location);
        setPriceRange(response.data.restaurant.priceRange);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-5'>
      <h1 className='fw-light display-1 text-center'>Update Restaurant</h1>
      <form className='form'>
        Name
        <input
          type='text'
          name='name'
          value={name}
          className='form-control mb-3'
          onChange={(e) => setName(e.target.value)}
        />
        Location
        <input
          type='text'
          name='location'
          value={location}
          className='form-control mb-3'
          onChange={(e) => setLocation(e.target.value)}
        />
        Price Range
        <select
          name='price_range'
          value={priceRange}
          className='form-select mb-3'
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value='Price Range' disabled>
            Price Range
          </option>
          <option value='1'>$</option>
          <option value='2'>$$</option>
          <option value='3'>$$$</option>
          <option value='4'>$$$$</option>
          <option value='5'>$$$$$</option>
        </select>
        <input type='submit' value='Update' className='btn btn-primary' />
      </form>
    </div>
  );
};

export default UpdatePage;
