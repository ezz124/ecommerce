import mongoose from "mongoose";

const productShema = new mongoose.Schema({
    name:{type:String, required:true },
    description:{type:String, required:true },
    price: { type:Number, required:true},
    image: { type:Array, required:true},
    category: { type:String, required:true},
    sizes: { type:Array, required:true},
    bestseller: {type:Boolean},
    date:{type:Number, required:true}
})

const productMode1 = mongoose.models.product || mongoose.model("product",productShema);

export default productMode1