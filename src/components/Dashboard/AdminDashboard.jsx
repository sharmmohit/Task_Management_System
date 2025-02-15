import React from 'react';
import Header from '../others/Header';
import CreateTaskList from './CreateTaskList';
import AllTask from '../others/AllTask';

const AdminDashboard = () => {
  return (
    <div className=" h-screen w-full p-4 md:p-10 bg-gray-100">
      <Header />
    <CreateTaskList/>
    <AllTask/>
    </div>
  );
};

export default AdminDashboard;