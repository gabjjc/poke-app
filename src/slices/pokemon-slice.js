import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    id: null,
    name: "",
  },
  reducers: {
    select: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    unSelect: (state) => {
      state.id = null;
      state.name = "";
    },
  },
});

export const { select, unSelect } = pokemonSlice.actions;
export default pokemonSlice.reducer;
