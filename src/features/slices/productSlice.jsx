import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";
import { json } from "react-router-dom";
import { useEffect } from "react";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    filteredSingleProduct: JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
  },
  reducers: {
    filterProducts: (state, action) => {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (error) {
        return error;
      }
    },
    singleProduct: (state, action) => {
      try {
        const product = storeData.filter(
          (product) => action.payload === product.id
        );
        state.filteredSingleProduct = product;
        const saveState = JSON.stringify(product);
        sessionStorage.setItem('singleProduct',saveState);
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProducts , singleProduct } = productSlice.actions;
export default productSlice.reducer;
