import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const openedModalNameSlice = createSlice({
  name: 'openedModalName',
  initialState,
  reducers: {
    updateOpenedModalName: (state, action) => {
      state.value = action.payload;
       },
     },
});

export const { updateOpenedModalName } = openedModalNameSlice.actions;
export default openedModalNameSlice.reducer;