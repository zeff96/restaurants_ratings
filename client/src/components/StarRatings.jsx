import React from 'react';

const StarRatings = ({ rating }) => {
  const stars = [];

  for (let elem = 0; elem <= 5; elem++) {
    if (elem <= rating) {
      stars.push(
        <i className='fa-sharp fa-solid fa-star text-warning' key={elem}></i>
      );
    } else if (elem === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <i className='fa-solid fa-star-half-stroke text-warning' key={elem}></i>
      );
    } else {
      stars.push(
        <i className='fa-regular fa-star text-warning' key={elem}></i>
      );
    }
  }
  return <>{stars}</>;
};

export default StarRatings;
