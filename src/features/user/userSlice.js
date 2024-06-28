import { createSlice } from "@reduxjs/toolkit";
import { login } from "./userApi";

const xxx = {
    users: null,
}
const userSlice = createSlice({
    name: "userssss",
    initialState: xxx,
    reducers: {
        showUser: (state, action) => {
            state.users = action.payload;
            localStorage.setItem(login(state.users));
            alert("התחברת בהצלחה")
        },
    }
})

export const { showUser } = userSlice.actions;
export default userSlice.reducer;