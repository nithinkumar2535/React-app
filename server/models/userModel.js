import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    admin:Boolean
})


const userModel = mongoose.model("users",userSchema);



export default userModel;