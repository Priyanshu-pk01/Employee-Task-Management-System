import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authContext = useContext(AuthContext)
return (
    <div className='bg-[#1c1c1c] p-3 sm:p-5 mt-5 h-80 rounded ' id='Alltask'>
         <div>
             <div className= 'text-white bg-red-300 mb-2 px-3 sm:px-4 py-3 rounded flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
            <h2 className= ' w-1/5  font-medium text-sm sm:text-base text-white '>Employees Name</h2>
            <h3 className= ' w-1/5  text-sm sm:text-base'>New Task</h3>
            <h5 className= ' w-1/5  text-sm font-semibold'>Active Task</h5>
            <h5 className= ' w-1/5  text-sm font-semibold' >Completed Task </h5>
            <h5 className= ' w-1/5  text-sm font-semibold'>Failed Task</h5>
            
  

        </div>
         </div>
         <div className='overflow-y-auto h-[80%]'>
            {authContext.employees.map(function(elm ,idx ){
                return   <div key={idx} className='bg-transparent border-2 border-emerald-500 mb-2 px-3 sm:px-4 py-3 rounded flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
            <h2 className= ' w-1/5  font-medium text-sm sm:text-base text-white '>{elm.firstName}</h2>
            <h3 className=  'w-1/5  text-sm font-semibold text-blue-400 ' >{elm.taskCounts.active}</h3>
            <h5 className= ' w-1/5  text-sm font-semibold text-green-400  ' >{elm.taskCounts.newTask}</h5>
            <h5 className= ' w-1/5  text-sm font-semibold text-red-400 '>{elm.taskCounts.completed}</h5>
                    <h5 className= ' w-1/5  text-sm font-semibold text-red-400 '>{elm.taskCounts.failed}</h5>

        </div>
            })}

         </div>

          
    </div>
  )
}

export default AllTask
