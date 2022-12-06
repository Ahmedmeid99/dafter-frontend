import { Provider, useDispatch, useSelector } from "react-redux"
import { createSlice, configureStore } from "@reduxjs/toolkit"
import { logoutUser, updateUser } from "../Api/user"

export const userSlice = createSlice({
    name: 'user',
    initialState: { user: { name: '', email: '', icon: '' } },
    reducers: {
        resetUserInfo(state, action) {
            action = action.payload
            const firstN = action.name.split(' ')[0]
            // const lastN = action.name.split(' ')[1] 
            const icon = firstN[0].toUpperCase()
            state.user = {
                name: action.name,
                email: action.email,
                icon
            }
        },
        updateUser(state, action) {
            const updatedUserInfo = action.payload
            updateUser(updatedUserInfo)
        },
        logoutUser(state, action) {
            logoutUser()
        }
    }
})



const userAction = userSlice.actions
export default userAction