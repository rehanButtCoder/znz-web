import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {},
    userLoginData: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserLoginData: (state, action) => {
            // debugger
            state.userLoginData = action.payload
        },
        addUserData: (state, action) => {
            // debugger
            state.userData = action.payload
        },
        userRemoveData: (state) => {
            // debugger
            state.userData = {};
            state.userLoginData = {};
        },
        // decrement: (state) => {
        //   state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //   state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { addUserData, userRemoveData, addUserLoginData } = userSlice.actions

export default userSlice.reducer