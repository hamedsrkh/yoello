import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'
import {Beer} from "../types";
import {stat} from "fs";

type Product = {
    beer: Beer,
    count: number
}

interface CartState {
    products: Product[]
}

const initialState: CartState = {
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const index = state.products.findIndex(product=>product.beer.id === action.payload.id)
            if (index == -1){
                state.products.push({
                    beer:action.payload,
                    count : 1
                })
            }else{
                state.products[index].count++
            }
        },
        incrementProductCount: (state, action: PayloadAction<any>) => {
            const index = state.products.findIndex(product=>product.beer.id === action.payload.id)
            if (index !== -1){
                state.products[index].count++
            }
        },
        decrementProductCount: (state, action: PayloadAction<any>) => {
            const index = state.products.findIndex(product=>product.beer.id === action.payload.id)
            if (index !== -1){
                if(state.products[index].count>1){
                    state.products[index].count--
                }else if(state.products[index].count == 1){
                    state.products.splice(index,1)
                }
            }
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            const index = state.products.findIndex(product=>product.beer.id === action.payload.id)
            if (index !== -1){
                if(state.products[index].count>1) {
                    state.products.splice(index, 1)
                }
            }
        },
    },
})

export const {
    addToCart,
    incrementProductCount,
    decrementProductCount,
    removeFromCart
} = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.products

export default cartSlice.reducer