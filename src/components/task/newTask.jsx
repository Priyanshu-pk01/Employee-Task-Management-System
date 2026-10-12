import React from 'react'

const NewTask = ({data}) => {
  return (
    <div>
             <div className='bg-yellow-300 h-full p-5 shrink-0  w-89.5 rounded-2xl snap-start'>
                <div className='flex justify-between items-center'>
                    <h1 className='bg-red-600 rounded text-sm text-white px-3 py-1 '>{data.category} </h1>
                    <h2 className='text-sm  text-white '>{data.taskDate}</h2>
                </div>
                <h1 className='font-semibold text-xl text-white mt-5 p-3' >{data.taskTitle}</h1>
                <p className='text-sm mt-2 text-white '>{data.taskDescription}</p>
                    <div className='flex justify-between mt-4' >
                      <button className='bg-yellow-600 w-full px-2 py-1 rounded text-center text-sm hover:bg-yellow-700 active:scale-85' >Accept Task </button>
                    </div>

            </div>
    </div>
  )
}

export default NewTask
