import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./walletSlice";
import walletSlice from "./walletSlice";


const store = configureStore({
reducer : walletSlice
})

export default store