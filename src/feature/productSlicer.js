import { createSlice } from "@reduxjs/toolkit";

const initialState = {allProducts: [], addedProduct: [], qty: 0};

export const productSlice = createSlice({
    name: "add",
    initialState,
    reducers: {
        mainData(state, action){
            return {...state, allProducts: [...action.payload]}
        },
        qtyIncrement(state){
            return {...state, qty: state.qty + 1}
        },
        qtyDecrement(state){
            if(state.qty > 0){
                return {...state, qty: state.qty - 1};
            }
        },
        addProduct(state, action){
            const addedItem = state.allProducts.filter(function(el){
                return el.id === action.payload
            })
            return {...state, addedProduct: [ ...addedItem]}
            
        }
    }
})

export const {mainData, productAdded, addProduct, qtyIncrement, qtyDecrement} = productSlice.actions;

export default productSlice.reducer;