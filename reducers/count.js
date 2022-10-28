import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {count: null},
};

export const userSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    count1: (state, action) => {
      state.value.count = action.payload.count;
       },
     },
});

export const { count1 } = userSlice.actions;
export default userSlice.reducer;