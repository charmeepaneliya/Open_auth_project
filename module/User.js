
import mongoose from "mongoose";

const userShecma = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    googleId:{
        type:String,
        required:true,
    }
},
{
    timestamps:true,
});

const User = mongoose.model("User",userShecma);

export default User;