import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, equipe : null, manager : null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.equipe = action.payload.equipe;
      state.value.manager = action.payload.manager;
    //   state.value.email = action.payload.email;
    },
    logout: (state) => {
      state.value.token = null;
      //   state.value.email = null;
    },
    updateReponses: (state, action) => {
      // Les réponses aux questions doivent être mises dans un tableau - même s'il n'y a qu'une seule réponse
      state.value.reponses = {
        ...state.value.reponses,
        [action.payload.numeroQuestion]: action.payload.reponse,
      };
    },
    clearReponses: (state) => {
      // Les réponses aux questions doivent être mises dans un tableau - même s'il n'y a qu'une seule réponse
      state.value.reponses = {};
    },
  },
});

export const { login, logout, updateReponses, clearReponses } = userSlice.actions;
export default userSlice.reducer;
