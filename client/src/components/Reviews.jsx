import React from 'react';
import StarRatings from './StarRatings';

const Reviews = ({ reviews }) => {
  return (
    <div className='my-3'>
      {reviews &&
        reviews.map((review) => (
          <div
            className='card text-bg-secondary mb-3 me-4'
            style={{ maxWidth: '30%' }}
          >
            <div className='d-flex justify-content-between p-1'>
              <span>{review.name}</span>
              <span>
                <StarRatings />
              </span>
            </div>
            <p>{review.review}</p>
          </div>
        ))}
    </div>
  );
};

export default Reviews;
