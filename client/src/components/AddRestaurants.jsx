import React from 'react';

const AddRestaurants = () => {
  return (
    <div className='mb-4'>
      <form className='row g-3 align-items-center'>
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
            aria-label='Default select example'
            required
          >
            <option defaultValue='price range'>Price Range</option>
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
