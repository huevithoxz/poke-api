import {createSlice} from '@reduxjs/toolkit'; 


const initialState = { 
    name:'',
    pokemon:[],
    showList: false,
    spinnerLoader:false,
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
         state.pokemon = pokemon ;
         state.name = name;
         state.showList = true;
         state.spinnerLoader = false;
        
        },
        voidList: (state,action) => {

         state.showList = action.payload;
        },
        spinnerLoad: (state,action) => {

         state.spinnerLoader = action.payload;
        },
      
    },
});

export const {addList,voidList,spinnerLoad} = pokemonSlice.actions; 
export default pokemonSlice.reducer;