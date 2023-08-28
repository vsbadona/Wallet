import express from "express";
import { loginUser,registerUser, updateWallet } from "../Controller/userController.js";
const Routes = express.Router();


Routes.post('/register',registerUser)
Routes.get('/login',loginUser)
Routes.get('/wallet',updateWallet)

export default Routes