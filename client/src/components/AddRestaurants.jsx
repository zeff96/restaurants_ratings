import React, { useContext, useRef } from 'react';
import Restaurants from '../apis/Restaurants';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurants = () => {
  const { addRestaurant } = useContext(RestaurantsContext);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const form = Object.fromEntries(formData);

    const data = {
      name: form.name,
      location: form.location,
      price_range: form.price_range,
    };

    try {
      const response = await Restaurants.post('/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      e.target.reset();

      addRestaurant(response.data.restaurant);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mb-4'>
      <form
        ref={formRef}
        className='row g-3 align-items-center'
        onSubmit={handleSubmit}
      >
        <div className='col-sm'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            required
            className='form-control'
          />
        </div>
        <div className='col-sm'>
          <input
            type='text'
            name='location'
            id='location'
            placeholder='Location'
            required
            className='form-control'
          />
        </div>
        <div className='col-sm'>
          <select
            className='form-select'
            name='price_range'
            id='price_range'
            aria-label='Default select example'
            defaultValue='Price Range'
            required
          >
            <option disabled value='Price Range'>
              Price Range
            </option>
            <option value='1'>$</option>
            <option value='2'>$$</option>
            <option value='3'>$$$</option>
            <option value='4'>$$$$</option>
            <option value='5'>$$$$$</option>
          </select>
        </div>
        <div className='col-sm d-grid'>
          <input type='submit' value='Add' className='btn btn-primary' />
        </div>
      </form>
    </div>
  );
};

export default AddRestaurants;
