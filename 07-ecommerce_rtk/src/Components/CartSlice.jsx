import {createslice} from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    };

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItemToCart (state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quatity += 1;
                }
            else{
                state.carItems.push({ ...action.payload, quantity: 1 });
                }
            },

        removeItemFromCart (state, action) {
            state,cartItems = state.cartItems.filter(item => item.id !== action.payload);
            },

        clearCart (state) {
            state.cartItems = [];
            },

        increaseItemQuantity (state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
                }
            },
        
        decreaseQuantity (state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id ===action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity-= 1;
                }
            }
        },

});

export const {
    addItemToCart,
        removeItemToCart,
        clearCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        } = CartSlice.actions;

export default CartSlice.reducer;
