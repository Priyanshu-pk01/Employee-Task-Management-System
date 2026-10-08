import React from 'react'
import Header from '../other/header'
import TaskListNumber from '../other/taskListNumber'
import TaskList from '../task/taskList'

const EmployeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen '>
        <Header />
        <TaskListNumber />
        <TaskList />
      
    </div>
  )
}

export default EmployeDashboard
