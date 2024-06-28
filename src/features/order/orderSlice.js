import { createSlice } from "@reduxjs/toolkit";

const xxx = {
    basket: [],
};

const orderSlice = createSlice({
    name: "hotellll",
    initialState: xxx,
    reducers: {
        addDil: (state, action) => {
            let index = state.basket.findIndex(item => item._id === action.payload._id)
            if (index === -1)
                state.basket.push(action.payload);
            else state.basket[index].qty += action.payload.qty;
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload;
            state.basket = state.basket.filter((item) => item.id !== idToRemove);
        },
        incrementQuantity: (state, action) => {
            const idToIncrement = action.payload;
            const itemToIncrement = state.basket.find((item) => item.id === idToIncrement);
            if (itemToIncrement) {
                itemToIncrement.qty += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const idToDecrement = action.payload;
            const itemToDecrement = state.basket.find((item) => item.id === idToDecrement);
            if (itemToDecrement && itemToDecrement.qty > 0) {
                itemToDecrement.qty -= 1;
            }
        },
        deleteDil: (state, action) => {
            let index = state.basket.findIndex(item => item._id === action.payload._id)
            if (index !== -1)
                state.basket.splice(index, 1);

        },


    },
})

export const { changeNumRooms, addDil, changeisShow, removeItem, incrementQuantity, decrementQuantity } = orderSlice.actions;
export default orderSlice.reducer;