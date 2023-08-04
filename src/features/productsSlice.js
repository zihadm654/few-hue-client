import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    try {
      const res = await api.get("/products");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const fetchAsyncProductDetails = createAsyncThunk(
  "products/fetchAsyncProductDetails",
  async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  }
);
const initialState = {
  products: [],
  productDetails: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeProductDetails: (state) => {
      state.productDetails = {};
    },
  },
  extraReducers: {
    [fetchAsyncProducts.pending]: (state) => {
      state.status = "pending";
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      state.status = "successful";
      state.products = payload;
    },
    [fetchAsyncProducts.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchAsyncProductDetails.pending]: (state) => {
      state.status = "pending";
    },
    [fetchAsyncProductDetails.fulfilled]: (state, { payload }) => {
      state.status = "Fetched Successfully";
      state.productDetails = payload;
    },
    [fetchAsyncProductDetails.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export const { removeProductDetails } = productsSlice.actions;
export const getAllProducts = (state) => state.products.products;
export const getProductDetails = (state) => state.products.productDetails;
export default productsSlice.reducer;
