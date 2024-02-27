import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

const name = "slider";
const initialState = {
    value:0 ,
    length: sliderData.length-1
}
const reducers = {
    nextSlide:( state , action )=>{
        console.log("action",action.payload);
        console.log("state", state.value)
        state.value = action.payload > state.length ? 0 : action.payload;
    },
    prevSlide:( state , action )=>{
        console.log("action",action.payload);
        console.log("state", state.value)
        state.value = action.payload < 0 ? state.length : action.payload;
    },
    dotSlide:(state , action)=>{
        state.value = action.payload;
    }
}

export const sliderSlice = createSlice({
    name,
    initialState,
    reducers
});

export const { nextSlide , prevSlide , dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
