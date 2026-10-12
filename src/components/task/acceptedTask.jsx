import React from 'react'

const AcceptedTask = ({data}) => {
  return (
    <div>
          <div className='bg-green-300 h-full p-5 shrink-0  w-89.5 rounded-2xl snap-start'>
                <div className='flex justify-between items-center'>
                    <h1 className='bg-red-600 rounded text-sm text-white px-3 py-1 '>{data.category}</h1>
                    <h2 className='text-sm  text-white '>{data.taskDate}</h2>
                </div>
                <h1 className='font-semibold text-xl text-white mt-5 p-3' >{data.taskTitle}</h1>
                <p className='text-sm mt-2 text-white '>{data.taskDescription}</p>
                <div className='flex justify-between mt-4' >
                  <button className='bg-green-600 hover:bg-green-700   px-2 py-1 rounded active:scale-75 text-sm text-center ' >Mark as Compeleted</button>
                  <button className='bg-red-400 hover:bg-red-500 px-2  rounded active:scale-75 text-sm text-center ' >Mark as Failed</button>
                </div>

            </div>
      
    </div>
  )
}

export default AcceptedTask
