import React from 'react';

const Notification = () => {
  return (
    <div className='h-12 bg-blue-500 text-white px-4 flex items-center justify-start text-center text-sm md:text-base cursor-pointer'>
      <span style={{ marginLeft: '300px', fontSize: '10' }}>Opening Hour: 9:00am - 10:00pm</span>
      <div
        className='h-12 bg-blue-500 text-white px-4 flex items-center justify-end text-center text-sm md:text-base cursor-pointer'
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          fontSize: '15px',
        }}
      >
        <span style={{ marginRight: '90px' }}>info@example.com</span>
        <span style={{ marginRight: '10px' }}>Road 01, Block-B, West London City</span>
      </div>


    </div>
  );
};

export default Notification;
