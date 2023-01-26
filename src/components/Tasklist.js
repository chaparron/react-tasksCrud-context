import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import {Link} from 'react-router-dom'

const Tasklist = () => {
  const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext)
  return (
    <div className='flex justify-center'>
      <div className='w-6/12'>
        {tasks.map(task => (
          <div className='bg-gray-900 py-5 px-20 text-white shadow-2x1 mb-4 flex justify-between' key={task.id}>
            <div>
              <h1>Title: {task.title}</h1>
              <h6>Id: {task.id}</h6>
              <p>Desc: {task.description}</p>
              <button 
              className='bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2'
              onClick={() => toggleTaskDone(task.id)}>
                {task.done ? 'Done' : "Undone"}
              </button>
            </div>
            <div>
              <Link 
              to={`/edit/${task.id}`}
              className='bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2'>
                Edit
              </Link>
              <button 
              onClick = { () => deleteTask( task.id ) }
              className='bg-red-600 hover:bg-red-500 py-2 px-4 mr-2'>
                Delete
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasklist