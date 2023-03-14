import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/taskSlice/taskSlice'

const Header = () => {
  const [newTask,setnewTask]=useState({title:""})
  const dispatch=useDispatch()
  return (
    <div>
      <input value={newTask.title} type="text" placeholder='Add task' 
        onChange={(e) => (setnewTask({ ...newTask, title: e.target.value ,isDone:false, id:Math.floor(Math.random()*10000000000000)}))}
      />
      <button onClick={()=>{
      dispatch(addTask(newTask))
      setnewTask({title:""})
    }} >Add</button>
    </div>
  )
}

export default Header
