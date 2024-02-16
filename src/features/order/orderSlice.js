import { createSlice } from "@reduxjs/toolkit";

const xxx = {
   
    basket:[]

};

const orderSlice = createSlice({
    name: "hotellll",
    initialState: xxx,
    reducers: {
        changeNumRooms: (state, action) => {
            state.RoomsByInvitation = action.payload;
        },
        addDil: (state, action) => {
          let index=  state.basket.findIndex(item=>item._id==action.payload._id)
            if(index==-1)
            state.basket.push(action.payload);
        else state.basket[index].qty+=action.payload.qty;

        },
    },
})

export const { changeNumRooms, addDil } = orderSlice.actions;
export default orderSlice.reducer;