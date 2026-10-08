import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 pt-10 justify-between gap-5 '>
        <div className=' py-6 px-9  bg-red-400 text-white p-5 rounded-xl'>
             <h2 className='text-3xl font-semibold '>0</h2>
             <h3 className='text-xl font-medium'>New Task </h3>
        </div>
        <div className=' py-6 px-9  bg-blue-400 text-white p-5 rounded-xl'>
             <h2 className='text-3xl font-semibold '>0</h2>
             <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className=' py-6 px-9  bg-green-400 text-white p-5 rounded-xl'>
             <h2 className='text-3xl font-semibold '>0</h2>
             <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className=' py-6 px-9  bg-yellow-400 text-white p-5 rounded-xl'>
             <h2 className='text-3xl font-semibold '>0</h2>
             <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    
    </div>
  )
}

export default TaskListNumber
