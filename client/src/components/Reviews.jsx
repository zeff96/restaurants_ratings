import React from 'react';
import StarRatings from './StarRatings';

const Reviews = ({ reviews }) => {
  return (
    <div className='my-3'>
      <div className='row g-3 px-2 gap-2'>
        {reviews &&
          reviews.map((review) => (
            <div
              className='card text-bg-secondary col-md-5 col-lg-3'
              key={review.id}
            >
              <div className='d-flex justify-content-between p-1'>
                <span>{review.name}</span>
                <span>
                  <StarRatings rating={review.rating} />
                </span>
              </div>
              <p>{review.review}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reviews;
