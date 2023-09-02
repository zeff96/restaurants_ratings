import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Restaurants from '../apis/Restaurants';

const AddRatings = () => {
  const { id } = useParams();
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const form = Object.fromEntries(formData);

    const data = {
      name: form.name,
      review: form.review,
      rating: form.rating,
    };

    try {
      const response = await Restaurants.post(`/${id}/reviews`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      e.target.reset();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className='row g-3' ref={formRef} onSubmit={handleSubmit}>
      <div className='col-md-9'>
        <label htmlFor='name' className='form-label d-block'>
          Name
          <input type='text' name='name' className='form-control' />
        </label>
      </div>
      <div className='col-md-3'>
        <label htmlFor='rating' className='form-label d-block'>
          Rating
          <select name='rating' className='form-select' defaultValue='rating'>
            <option disabled value='rating'>
              Rating
            </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </label>
      </div>
      <div className='col-12'>
        <label htmlFor='review' className='form-label d-block'>
          Review
          <textarea name='review' className='form-control'></textarea>
        </label>
      </div>
      <div className='col-12'>
        <input type='submit' value='Submit' className='btn btn-primary' />
      </div>
    </form>
  );
};

export default AddRatings;
