import React from 'react';

const Reviews = () => {
  return (
    <div className='my-3'>
      <div
        className='card text-bg-secondary mb-3 me-4'
        style={{ maxWidth: '30%' }}
      >
        <div className='d-flex justify-content-between p-1'>
          <span>Mike</span>
          <span>3</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          reiciendis iste minus fugit voluptatem necessitatibus consectetur. Eum
          quidem illo enim?
        </p>
      </div>
    </div>
  );
};

export default Reviews;
