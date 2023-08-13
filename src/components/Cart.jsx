/* eslint-disable no-restricted-globals */
import React from "react";

const Cart = ({ tasks, deleteTask, updateTask }) => {
   
    const handleDelete = (id) =>{
        if(confirm('Are You Sure?')){
            deleteTask(id)
        }
        
    }

  return (
    <div>
        {
            tasks.map((tasks)=>(
                <div key={ tasks.id }className={tasks.complete ? 'list-group-item w-75 mt-3 shadow-sm bg-success text-decoration-line-through' : 'list-group-item w-75 mt-3 shadow-sm bg-info'} >
            <div className="row">
              <div className="col-10">
                <input type="checkbox" onChange={() => updateTask(tasks.id, !tasks.complete)} className="me-3" checked={tasks.complete} />
                {tasks.task}</div>
              <div className="col-2" onClick={() => handleDelete(tasks.id)}>
                <i className="fa-solid fa-trash" ></i>
              </div>
            </div>
          </div>
            ))
        }
    </div>
  );
};

export default Cart;
