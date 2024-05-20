import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name:String,
    des:String,
    price:Number
})


const productModel = mongoose.model("products",productSchema);



export default productModel;