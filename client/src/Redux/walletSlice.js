import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  login : false,
  user : {}
}

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
       
        user(state,action){
            state.user = action.payload
        }, toogleLogin(state, action) {
            if (state.login == false) {
                state.login = true
            } else {
                state.login = false
            }
        }}
       
})



export default walletSlice.reducer
export const {toogleLogin,user } = walletSlice.actions