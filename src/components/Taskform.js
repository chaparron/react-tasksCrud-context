import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate,useParams } from 'react-router-dom'

const Taskform = () => {
  const { addTask, tasks, updateTask } = useContext(GlobalContext)
  const navigate = useNavigate()
  const params = useParams()

  const [task, setTask] = useState({
    id:"",
    title: "",
    description: ""
  })

  const handleChange = e =>
    setTask({ ...task, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    if (!task.id){
      addTask(task)
    } else {
      updateTask(task)
    }
    navigate("/")
  }

  useEffect(() => {
    const taskFound = tasks.find(task => task.id === params.id)
    if(taskFound) {
      setTask(taskFound)
    }
  },[params.id, tasks])
  

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className='mb-7 text-3x1'>
          { task.id ? "Editing task" : "Add task"}
        </h2>
        <div className="mb-5">
          <input type="text"
            name="title"
            value={task.title}
            placeholder='Write a title'
            onChange={handleChange}
            className='py-3 px-4 focus:text-gray-100 bg-gray-700 w-full focus:outline-none' />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            value={task.description}
            placeholder="Write your description"
            rows="2"
            onChange={handleChange}
            className='py-3 px-4 focus:text-gray-100 bg-gray-700 w-full focus:outline-none'>
          </textarea>
        </div>
        <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
        { task.id ? "Edit task" : "Create task"}
        </button>
      </form>
    </div>
  )
}

export default Taskform