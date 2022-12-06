import { createSlice } from "@reduxjs/toolkit"
import { deleteNote, updateNote } from "../Api/notes"

export const noteSlice = createSlice({
    name: 'notes',
    initialState: { notes: [] },
    reducers: {
        setNotes(state, action) {
            const notes = action.payload
            state.notes = notes
        },
        addNote(state, action) {
            const newNote = action.payload
            state.notes = [...state.notes, newNote]
        },
        removeNote(state, action) {
            const id = action.payload
            state.notes = state.notes.filter((note) => note._id !== id)
            deleteNote(id)
        },
        updateNote(state, action) {
            action = action.payload
            const newNotes = state.notes.filter((note) => note._id !== action.id)
            state.notes = [...newNotes, action.note]
            updateNote({ id: action.id, note: action.note })
        },


    }
})

const noteAction = noteSlice.actions
export default noteAction