import {configureStore} from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';

/**
 * configured store with redux toolkit
 */
export const store = configureStore({
    reducer: { 
        pokemons: pokemonReducer,
    }
});