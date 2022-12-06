import LoginPage from "./pages/LoginPage"
import TasksPage from "./pages/TasksPage"
import ProfilePage from "./pages/ProfilePage"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import NotFindPage from "./pages/NotFindPage"
import { token, URL } from "./Api/variables"
import taskAction from "./redux/taskSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import NotesPage from "./pages/NotesPage"
import noteAction from "./redux/noteSlice"
import DiariesPage from "./pages/DiariesPage"
import diaryAction from "./redux/diariesSlice"
const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getTasks()
        getNotes()
        getDiaries()
    }, []);
    ////////////////////////////////
    async function getTasks() {
        await fetch(`${URL}/api/tasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then((data) => data.json()).then((res) => {
            if (res.error) { return console.log(res.error) }
            dispatch(taskAction.setTasks(res))
        })
    }
    ////////////////////////////////
    async function getNotes() {
        await fetch(`${URL}/api/notes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then((data) => data.json()).then((res) => {
            if (res.error) { return console.log(res.error) }
            dispatch(noteAction.setNotes(res))
        })
    }
    ////////////////////////////////
    async function getDiaries() {
        await fetch(`${URL}/api/diaries`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then((data) => data.json()).then((res) => {
            if (res.error) { return console.log(res.error) }
            dispatch(diaryAction.setDiaries(res))
        })
    }

    return (
        <Routes>
            <Route end path="/" element={ <LoginPage /> } />
            <Route path="/profile" element={ <ProfilePage /> } />
            <Route path="/tasks" element={ <TasksPage /> } />
            <Route path="/notes" element={ <NotesPage /> } />
            <Route path="/diares" element={ <DiariesPage /> } />
            <Route path="/gallery" element={ <NotFindPage /> } />
            <Route path="*" element={ <NotFindPage /> } />
        </Routes>
    );
}

export default App;
