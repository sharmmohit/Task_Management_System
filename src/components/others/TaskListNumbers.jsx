import React from 'react';

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-4'>
      <div className='rounded-xl py-6 px-9 bg-red-400 shadow-md text-white text-center'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl py-6 px-9 bg-blue-400 shadow-md text-white text-center'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl py-6 px-9 bg-green-400 shadow-md text-white text-center'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>

      <div className='rounded-xl py-6 px-9 bg-green-400 shadow-md text-white text-center'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
