
import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({data}) => {
  console.log(data);
  return (
    <div className='text-white p-10 bg-[#1C1C1C] h-screen'>
      <Header />
      <TaskListNumbers/>
      <TaskList/>
    </div>
  );
};

export default EmployeeDashboard;

