import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
const TaskList = () => {
  const tasks=useSelector((store) => store.task)
  
  return (
    <div>
    {tasks.map((el,i)=><Task key={i} task={el}/>)}
    </div>
  )
}

export default TaskList
