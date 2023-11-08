import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allJobsState: [],
}

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    addAllJobs: (state, action) => {
      state.allJobsState = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAllJobs } = jobSlice.actions

export default jobSlice.reducer