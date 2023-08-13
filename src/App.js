import React, { useEffect, useState } from 'react'
import "./App.css"
import List from './components/List'
import Form from './components/Form'
import { api } from './api/apiRe'
import uuid from 'react-uuid'


const App = () => {

const [tasks,setTask] = useState([])

  const fetchData = async() =>{
    const res = await api.get('/todolist')
                setTask(res.data);
  };

useEffect(()=>{
  fetchData();
},[tasks]);

const subTask = async (userTask) =>{
 const data = {
  id: uuid(), 
  task: userTask,
  complete: false
};
await api.post('todolist',data)
};


const deleteTask = async (task_id) =>{
 await api.delete(`todolist/${task_id}`)
}

const updateTask = async (task_id, complete)=>{
  await api.patch(`/todolist/${task_id}`,{complete})
}
  return ( 
    <div className='mx-auto w-50 mt-5'>

      <Form subTask = {subTask}/>
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  )
}

export default App