import React from 'react'

const CreateTaskList = () => {
  return (
    <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Create Task</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:flex-row md:flex-wrap justify-between">

          {/* Task Title */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-4"> {/* Added margin-bottom and padding-right */}
            <label htmlFor="taskTitle" className="block text-gray-700 text-sm font-bold mb-2">Task Title</label>
            <input type="text" id="taskTitle" placeholder="Enter task title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {/* Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-4"> {/* Added margin-bottom and padding-right */}
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea id="description" placeholder="Enter description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" cols="30"></textarea>
          </div>

          {/* Date */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-4"> {/* Added margin-bottom and padding-right */}
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input type="date" id="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {/* Assign To */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-4"> {/* Added margin-bottom and padding-right */}
            <label htmlFor="assignedTo" className="block text-gray-700 text-sm font-bold mb-2">Assign To</label>
            <input type="text" id="assignedTo" placeholder="Employee name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {/* Category */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-4"> {/* Added margin-bottom and padding-right */}
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <input type="text" id="category" placeholder="Design, Dev, etc." className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          {/* Button */}
          <div className="w-full md:w-1/3 mt-6"> 
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTaskList
