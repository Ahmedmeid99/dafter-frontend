import { createSlice } from "@reduxjs/toolkit"
import { deleteDiary, updateDiary } from "../Api/diaries"

export const diariesSlice = createSlice({
    name: 'diaries',
    initialState: { diaries: [] },
    reducers: {
        setDiaries(state, action) {
            const diaries = action.payload
            state.diaries = diaries
        },
        addDiary(state, action) {
            const newDiary = action.payload
            state.diaries = [...state.diaries, newDiary]
        },
        removeDiary(state, action) {
            const id = action.payload
            state.diaries = state.diaries.filter((diary) => diary._id !== id)
            deleteDiary(id)
        },
        updateDiary(state, action) {
            action = action.payload
            const newDiary = state.diaries.filter((diary) => diary._id !== action.id)
            state.diaries = [...newDiary, action.diary]
            updateDiary({ id: action.id, diary: action.diary })
        },
    }
})

const diaryAction = diariesSlice.actions
export default diaryAction