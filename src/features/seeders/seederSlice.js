import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
}

export const seederSlice = createSlice({
  name: 'seeder',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    addCategories: (state, action) => {
      debugger
      state.categories = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCategories } = seederSlice.actions

export default seederSlice.reducer