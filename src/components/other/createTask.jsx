import React, { useEffect, useState } from 'react'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskAssign, setTaskAssign] = useState('')
    const [taskCategory, setTaskCategory] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [setTask, setSetTask] = useState({})

    const handleSubmit =(e)=>{
        e.preventDefault()

        setSetTask({taskTitle,taskDescription,taskDate,taskAssign,taskCategory,active:false,newTask:true,completed:false,faild:false})
        const data = JSON.parse(localStorage.getItem('employees'))
        data.forEach(function(elm){
            if(taskAssign == elm.firstName){
                elm.tasks.push(setTask)
                console.log(elm)
            //    localStorage.setItem('employee',JSON.stringify(data))
            // 13 oct 2026 
            }


        })

        setTaskTitle('')
        setTaskDate('')
        setTaskAssign('')
        setTaskCategory('')
        setTaskDescription('')

    

    }

    
  return (
    <div>
         <div className='p-5 mt-5 bg-[#1c1c1c]  rounded text-white  '>
        
        
                <form className='flex flex-col md:flex-row flex-wrap w-full items-start justify-between mt-10 md:mt-20 border-2 border-emerald-500 rounded p-4 md:p-10 gap-6 ' onSubmit={(e)=>{
                   handleSubmit(e)
                }}>
                    <div className='w-1/2 mb:flex flex-row'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input placeholder='Enter task' className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4' type='text' value={taskTitle} onChange={(e)=>{
                                setTaskTitle(e.target.value)
                            }} />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5' >Date</h3>
                            <input type='date' placeholder='Date here' className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4' value={taskDate}
                            onChange={(e)=>{
                                setTaskDate(e.target.value)
                            }} />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                            <input placeholder='Enploye Name' className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4' value={taskAssign} onChange={(e)=>{
                                setTaskAssign(e.target.value)
                            }} />
                        </div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Field</h3>
                        <input placeholder='UI/UX,SWE,DS...etc' className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4'value={taskCategory} onChange={(e)=>{
                            setTaskCategory(e.target.value)
                        }} />


                    </div>

                    <div className='w-2/5 flex flex-col
                    items-start '>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea className="text-sm p-3 w-full min-h-48 rounded outline-none bg-transparent border border-gray-400 mb-4 "value={taskDescription} onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }} ></textarea>
                        <button type='submit' className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full active:scale-95'>Create Task</button>
                    </div>

                </form>
            </div>
      
    </div>
  )
}

export default CreateTask
