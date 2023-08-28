import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "./walletSlice";


const store = configureStore({
reducer : walletSlice
})

export default store