import React, { useState } from 'react'

const Form = ({subTask}) => {

const [userTask, setUserTask] = useState('')

const fromSubmitHanding = () => {
    subTask(userTask)
    setUserTask('')
}

  return (
    <>

    <h1 className='mb-5'>React To do List</h1>
        <div className="row">
            <div className="col-8">
                <input value={userTask} onChange={e=>setUserTask(e.target.value)} type="text" className='form-control' placeholder='Pls write your Enter' />
            </div>
            <div className="col-3">
                <button onClick={ () => fromSubmitHanding() } type='button' className='btn btn-success'> <i className='fa-solid fa-plus'></i> Add Tasks</button>
            </div>
        </div>
    </>

    )
}

export default Form