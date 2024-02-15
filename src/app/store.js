import {configureStore} from "@reduxjs/toolkit";
import hotelSlice from "../features/order/hotelSlice";


export const store= configureStore({
    reducer:{
        h:hotelSlice,
    },
});