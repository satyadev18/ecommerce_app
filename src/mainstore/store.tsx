import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/store/product-slice";

const store = configureStore({
    reducer:{
       product:productSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export default store;