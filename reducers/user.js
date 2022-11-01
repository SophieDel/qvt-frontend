import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {token: null, equipe : null, manager : null, nom: null, prenom: null, profil: null, reponses: [] },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.equipe = action.payload.equipe;
      state.value.manager = action.payload.manager;
      state.value.nom = action.payload.nom;
      state.value.prenom = action.payload.prenom;
      state.value.profil = action.payload.profil;
      state.value.reponses = action.payload.reponses;
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
    updateProfil: (state, action) => {
      state.value.profil = action.payload
    }
  },
});

export const { login, logout, updateReponses, clearReponses, updateProfil } = userSlice.actions;
export default userSlice.reducer;
