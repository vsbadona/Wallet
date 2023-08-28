import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance : {
        type : Number,
        default : 0
    },
    history:[
{
    amount : String,
date:String
}
    ]
})

const User = mongoose.model("User",userSchema);

export default User