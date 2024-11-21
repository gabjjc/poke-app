import { createSlice } from "@reduxjs/toolkit";

const tournamentSlice = createSlice({

    name: 'tournament',
    initialState: {
        created: false,
        players: [],
        startDate : null
    },
    reducers: {
        createTournament: ( state, action) => {
            state.players = action.payload.players
            state.startDate = action.payload.startDate
        },
        updatePosition: (state, action) => {
            state.players[action.payload.winner.position] = action.payload.winner.id
            state.players[action.payload.losser.position] = action.payload.losser.id
        },
        finalizedTournament: (state, action) => {
            state.created = false
            state.players = []
            state.startDate = null
        }

    }
});

export const { createTournament, updatePosition,finalizedTournament } = tournamentSlice.actions;
export default tournamentSlice.reducer;