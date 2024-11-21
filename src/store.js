

import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './slices/pokemon-slice'
import tournamentReducer from './slices/tournament-slice'

export const store = configureStore({

    reducer: {
        pokemon: pokemonReducer,
        tournament: tournamentReducer
    }
    
})