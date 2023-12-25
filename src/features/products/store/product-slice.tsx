import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productListApi } from "../api";
import { ProductState } from "../types";



export const productListMiddleware = createAsyncThunk('product/list', async (limit: number) => {
    const response = await productListApi(limit);
     
    return response.data
})


const initialState:ProductState = {
    productList: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder.addCase(productListMiddleware.fulfilled, (state:any, action) => {
            state.productList = action.payload;
        });
    }
})

export const getProductList = (state:any) => state.product.productList
export default productSlice.reducer