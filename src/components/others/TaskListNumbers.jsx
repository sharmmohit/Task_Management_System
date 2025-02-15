import React from 'react';

const TaskListNumbers = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-4'>
      <div className='rounded-xl py-6 px-9 bg-red-400 shadow-md text-white text-center'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl py-6 px-9 bg-blue-400 shadow-md text-white text-center'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>In Progress</h3>
      </div>

      <div className='rounded-xl py-6 px-9 bg-green-400 shadow-md text-white text-center'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>

      <div className='rounded-xl py-6 px-9 bg-yellow-400 shadow-md text-white text-center'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Pending Review</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
