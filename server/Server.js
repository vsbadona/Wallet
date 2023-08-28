import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoutes from "./Routes/userRoutes.js"

const app  = express();
dotenv.config()

app.use(cors());
app.use(express.json());
app.use('/',userRoutes)

mongoose.connect(process.env.CONNECTION)
const db = mongoose.connection;
db.on("error",(err)=>console.log(err))
db.once("open",()=>console.log("Connected To DB"))
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log("Server Is Listening on Port 5000"))