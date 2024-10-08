import { v2 as cloudinary} from "cloudinary"
import productMode1 from "../models/productModel.js";

// function for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, sizes, bestseller } = req.body;

        // Find specific images by fieldname
        const image1 = req.files.find(file => file.fieldname === 'image1');
        const image2 = req.files.find(file => file.fieldname === 'image2');
        const image3 = req.files.find(file => file.fieldname === 'image3');
        const image4 = req.files.find(file => file.fieldname === 'image4');

        const images = [image1, image2, image3, image4].filter(item => item !== undefined);

        // Upload images to Cloudinary
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }

        // Save product to the database
        const product = new productMode1(productData);
        await product.save();

        // Send success response with the message
        res.json({ success: true, message: "Product Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}



// function for list product
const listProducts = async (req,res) =>{
    try {

        const products = await productMode1.find({});
        res.json({success:true,products})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}


// function for remove product
const removeProduct = async (req,res) =>{
    try {

        await productMode1.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}


// function for single product
const singleProduct = async (req,res) =>{
    try {

        const {productId} = req.body
        const product = await productMode1.findById(productId)
        res.json({success:true,product})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}

export {listProducts,addProduct,removeProduct,singleProduct}

