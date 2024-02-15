import { createSlice } from "@reduxjs/toolkit";

const xxx = {
    RoomsByInvitation: 0,
    InvitationDil: 0

};

const hotelSlice = createSlice({
    name: "hotellll",
    initialState: xxx,
    reducers: {
        changeNumRooms: (state, action) => {
            state.RoomsByInvitation = action.payload;
        },
        addDil: (state, action) => {
            state.InvitationDil=action.payload;

        },
    },
})

export const { changeNumRooms, addDil } = hotelSlice.actions;
export default hotelSlice.reducer;