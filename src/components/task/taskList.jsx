import React from 'react'
import NewTask from './newTask'
import AcceptedTask from './acceptedTask'
import FaildTask from './faildTask'
import CompeletedTask from './compeletedTask'

const TaskList = ({data}) => {
    console.log(data)
    return (
        <div id='tasklist' className='h-[55%] gap-5  mt-18 overflow-x-auto touch-pan-x snap-x snap-mandatory flex items-center '>
            {data.tasks.map((elm ,idx )=>{
                if(elm.active){
                    return<AcceptedTask key={idx} data={elm} />
                }
                if(elm.newTask){
                    return<NewTask key={idx} data={elm} />
                }
                if(elm.completed){
                   return<CompeletedTask key={idx} data={elm} />

                }
                if(elm.failed){
                   return <FaildTask key={idx} data={elm} />
                }
            })}
           
       
         
           

        </div>
    )
}

export default TaskList
