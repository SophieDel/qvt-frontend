import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {token: null, equipe : null, manager : null, nom: null, prenom: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.equipe = action.payload.equipe;
      state.value.manager = action.payload.manager;
      state.value.nom = action.payload.nom;
      state.value.prenom = action.payload.prenom;
       },
    logout: (state) => {
      state.value.token = null;
    //   state.value.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;