import { configureStore } from "@reduxjs/toolkit"
import { diariesSlice } from "./diariesSlice"
import { noteSlice } from "./noteSlice"
import { taskSlice } from "./taskSlice"
import { userSlice } from "./userSlice"
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        tasks: taskSlice.reducer,
        notes: noteSlice.reducer,
        diaries: diariesSlice.reducer,
    }
})