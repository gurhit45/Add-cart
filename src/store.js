import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./feature/productSlicer";

export const store = configureStore({
    reducer: {productStore: productSlice}
});