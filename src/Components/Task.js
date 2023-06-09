import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../redux/taskSlice/taskSlice'
const Task = ({task}) => {
const dispatch = useDispatch()
const [onUpdate , setonUpdate]=useState(false);
const [newTask, setnewTask]=useState(task);
  return (
    <div>
    {onUpdate ? 
    <>    
    <input type={"text"} defaultValue={task.title} onChange={(e)=>setnewTask({...newTask,title:e.target.value})}/>
   <button onClick={()=>{dispatch(editTask(newTask)) 
   setonUpdate(false)}}>Confirm</button>
   <button onClick={()=>setonUpdate(false)}>Cancel</button>
    </>
    :
    <>
      <h3>{task.title}</h3>
      <button onClick={()=>setonUpdate(true)}>Update</button>
      <button  onClick={()=>dispatch(deleteTask(task))}>Delete</button>
    </>
    }
    </div>

  )
}

export default Task
