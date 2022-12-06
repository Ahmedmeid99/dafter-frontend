import { createSlice } from "@reduxjs/toolkit"
import { deleteTask, toggleCompletTask, updateTask } from "../Api/tasks"

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: { tasks: [], activeTask: {}, completedCount: 0 },
    reducers: {
        setTasks(state, action) {
            const tasks = action.payload
            state.tasks = tasks
        },
        addTask(state, action) {
            const newTask = action.payload
            state.tasks = [...state.tasks, newTask]
        },
        removeTask(state, action) {
            const id = action.payload
            state.tasks = state.tasks.filter((task) => task._id !== id)
            deleteTask(id)
        },
        updateTask(state, action) {
            action = action.payload
            const newtasks = state.tasks.filter((task) => task._id !== action.id)
            state.tasks = [...newtasks, action.task]
            updateTask({ id: action.id, task: action.task })
        },
        getCompletedCount(state, action) {
            const completedTasks = state.tasks.filter((task) => task.completed === true)
            const completedCount = completedTasks.length
            state.completedCount = completedCount
        },
        toggleComplete(state, action) {
            const id = action.payload
            let oldTask = state.tasks.find((task) => task._id === id)
            oldTask.completed = !oldTask.completed
            console.log(oldTask)
            state.tasks = state.tasks
            toggleCompletTask({ id, completed: oldTask.completed })
        }

    }
})

const taskAction = taskSlice.actions
export default taskAction