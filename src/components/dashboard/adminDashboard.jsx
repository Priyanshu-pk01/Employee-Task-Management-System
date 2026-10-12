import React from 'react'
import Header from '../other/header'
import TaskList from '../task/taskList'
import CreateTask from '../other/createTask'
import AllTask from '../other/allTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
        <Header changeUser={props.changeUser}  />
        <CreateTask />
        <AllTask />
      
    </div>
  )
}

export default AdminDashboard

