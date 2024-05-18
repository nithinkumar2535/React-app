import mongoose from "mongoose";


const prouctSchema = new mongoose.Schema({
    name:String,
    des:String,
    price:Number
})


const prouctModel = mongoose.model("products",prouctSchema);



export default prouctModel;