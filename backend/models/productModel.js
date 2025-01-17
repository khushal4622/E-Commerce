import mongoose from "mongoose";

const productScheme = new  mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    image: {type:Array, required:true},
    category: {type:String, required:true},
    subCategory: {type:String, required:true},
    sizes: {type:Array, required:true},
    popular: {type:Boolean},
    date: {type:Number, default: Date.now}
})

const productModel = mongoose.models.product || mongoose.model("product", productScheme)

export default productModel;