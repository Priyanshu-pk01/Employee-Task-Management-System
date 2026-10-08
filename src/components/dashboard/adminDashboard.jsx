import React from 'react'
import Header from '../other/header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-screen p-10 '>
        <Header />
        <div className='flex justify-center items-center border-3 border-amber-200'>
            <form>
                <h3>Task Title</h3>
                <input placeholder='Enter task' className='' type='text' />
                <h3>Description</h3>
                <textarea id='' name='' rows="10" cols="20"></textarea>
                <h3>Date</h3>
                <input type='date' placeholder='Date here' />
                <h3>Assign To</h3>
                <input placeholder='Enploye Name'/>
                <h3>Field</h3>
                <input placeholder='UI/UX,SWE,DS...etc'/>
                <button></button>
               
            </form>
      </div>
       </div>
  )
}

export default AdminDashboard
