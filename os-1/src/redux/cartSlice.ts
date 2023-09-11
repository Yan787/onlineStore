import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/product.interface";

type initialType = {
    item: IProduct[] 
}

const initialState: initialType = {
    item: []
}

 export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>)=> {
            state.item = [...state.item, action.payload]
        },
        removeFromCart: (state, action: PayloadAction<number>)=> {
            state.item = state.item.filter(item => item.id !== action.payload)
        }
    }
})

export default cartSlice.reducer


