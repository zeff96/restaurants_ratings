import React, { useState } from 'react';
import Restaurants from '../apis/Restaurants';

const AddRestaurants = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      location,
      price_range: priceRange,
    };

    try {
      const response = await Restaurants.post('/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mb-4'>
      <form className='row g-3 align-items-center' onSubmit={handleSubmit}>
        <div className='col-sm'>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            placeholder='Name'
            required
            className='form-control'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='col-sm'>
          <input
            type='text'
            name='location'
            id='location'
            value={location}
            placeholder='Location'
            required
            className='form-control'
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className='col-sm'>
          <select
            className='form-select'
            aria-label='Default select example'
            required
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option disabled='price range'>Price Range</option>
            <option value='1'>$</option>
            <option value='2'>$$</option>
            <option value='3'>$$$</option>
            <option value='4'>$$$$</option>
            <option value='5'>$$$$$</option>
          </select>
        </div>
        <div className='col-sm'>
          <input type='submit' value='Add' className='btn btn-primary' />
        </div>
      </form>
    </div>
  );
};

export default AddRestaurants;
