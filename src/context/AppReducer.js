export default function appReducer(state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return {
                tasks: [...state.tasks, action.payload]
            }
        case "DELETE_TASK":
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case "UPDATE_TASK":
            const updatedTask = action.payload
            const updatedTasks = state.tasks.map( task => {
                if(updatedTask.id === task.id){
                    task.title = updatedTask.title
                    task.description = updatedTask.description
                }
                return task
            })
            return {
                tasks: updatedTasks
            }
        case "TOGGLE_TASK_DONE":
            return {
                tasks: state.tasks.map(task => 
                    task.id === action.payload ? {...task, done: !task.done} : task)
            }
            
        default:
            return state;
    }
}