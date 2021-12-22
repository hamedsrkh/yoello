import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface CartState {
    products: []
}

const initialState: CartState = {
    products: [],
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cart: (state, action: PayloadAction<any>) => {
            state.products = []
        },
    },
})

export const { cart } = counterSlice.actions

export const selectCart = (state: RootState) => state.cart.products

export default counterSlice.reducer