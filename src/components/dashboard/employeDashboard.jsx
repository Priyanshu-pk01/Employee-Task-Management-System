import React from 'react'
import Header from '../other/header'
import TaskListNumber from '../other/taskListNumber'
import TaskList from '../task/taskList'

const EmployeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen '>
        <Header changeUser={props.changeUser}  data={props.data} />
        <TaskListNumber data={props.data} />
        <TaskList data={props.data} />
      
    </div>
  )
}

export default EmployeDashboard
