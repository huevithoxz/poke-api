import {createSlice} from '@reduxjs/toolkit'; 


const initialState = { 
    name:'',
    pokemon:[],
    showList: false
}

/**
 * method to make action by a reducer simplify with createSlice
 */
export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: { 
    /**
     * 
     * @param {*} state 
     * @param {*} action 
     * add pokemon to a list
     */
        addList: (state, action) => {

         const   {pokemon,name} = action.payload;
         state.pokemon = pokemon 
         state.name = name
         state.showList = true
         
        
        },
        voidList: (state,action) => {

         state.showList = action.payload
        },
      
    },
});

export const {addList,voidList} = pokemonSlice.actions; 
export default pokemonSlice.reducer;