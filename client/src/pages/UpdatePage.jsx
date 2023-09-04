import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Restaurants from '../apis/Restaurants';

const UpdatePage = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const { id } = useParams();
  const nagivate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Restaurants.get(`/${id}`);
        setName(response.data.data.restaurant.name);
        setLocation(response.data.data.restaurant.location);
        setPriceRange(response.data.data.restaurant.price_range);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      location,
      price_range: priceRange,
    };

    try {
      await Restaurants.put(`/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      nagivate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mt-5'>
      <h1 className='fw-light display-1 text-center'>Update Restaurant</h1>
      <form className='form' onSubmit={handleSubmit}>
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
