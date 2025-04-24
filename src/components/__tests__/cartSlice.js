import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        item:[]
    },
    reducers:{
        addItem: (state, action) =>{
            state.item.push(action.payload);
            // mutating the state directly here
            // redux uses immer.js under the hood to make sure that the state is not mutated directly
            // immer.js creates a copy of the state and then applies the changes to the copy and returns the new state
            // so we can mutate the state directly here
            // immer is a library that allows you to work with immutable state in a more convenient way
        },
        removeItem: (state) =>{
            state.item.pop();
        },
        clearCart: (state) =>{
            state.item.length = 0;
        }
    
 
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;