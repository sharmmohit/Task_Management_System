import React, { useState, useEffect } from 'react';

const Header = ({ data }) => {
  const [username, setUsername] = useState('Admin');

  useEffect(() => {
    if (data && data.firstName) {
      setUsername(data.firstName);
    } else {
      setUsername('Admin');
    }
  }, [data]);

  const logoutUser = () => {
    localStorage.setItem('loggedInUser', null);
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello<br />
        <span className='text-3xl font-semibold'>{username}</span>
      </h1>

      <button
        onClick={logoutUser}
        className='bg-red-500 text-lg font-medium text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
