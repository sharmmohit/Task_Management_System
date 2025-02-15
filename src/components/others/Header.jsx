import React from 'react';

const Header = () => {
  return (
    <div className='flex items-end justify-between '>
      <h1  className='text-2xl font-medium'>Hello<br/><span className='text-3xl font-semibold'>Mohit</span></h1>
     
      <button className='bg-red-500 text-lg font-medium text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300'>
        Log Out
      </button>
    </div>
  );
};

export default Header;

