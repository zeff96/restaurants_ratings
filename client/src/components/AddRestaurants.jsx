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
            className='form-control'
          />
        </div>
        <div className='col-sm'>
          <input
            type='text'
            name='location'
            id='location'
            placeholder='Location'
            className='form-control'
          />
        </div>
        <div className='col-sm'>
          <select class='form-select' aria-label='Default select example'>
            <option defaultValue='price range'>Price Range</option>
            <option value='1'>$</option>
            <option value='2'>$$</option>
            <option value='3'>$$$</option>
            <option value='4'>$$$$</option>
            <option value='5'>$$$$$</option>
          </select>
        </div>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurants;
