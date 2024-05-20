import express from 'express';
import productModel from '../models/productModel.js'

const router = express.Router();


router.get('/userproduct',(req,res)=>{
    productModel.find()
    .then((products)=>{
        res.json(products)
    })
    .catch((error)=>{
        res.json(error);
    })
})

router.post('/addproduct',(req,res)=>{
    productModel.create(req.body)
    .then((product)=>{
       console.log(product);
       console.log(req.files.image);
       let Image = req.files.image
        Image.mv(path.join(`public/images/${product._id}.jpg`),(err)=>{
            if(err){
                console.log(err);
                res.status(500).json({error:"failed to upload image"})
            }else{
                res.json(product)
                console.log(product);
            }
        })
    })
    .catch((error)=>{
        res.json(error);
        console.log(error)
    })
})

router.get('/adminproduct',(req,res)=>{
    productModel.find()
    .then((product)=>{
        res.json(product);

    })
    .catch((error)=>{
        res.json(error)
    })
})

router.delete('/deleteproduct/:id',(req,res)=>{
    const productID = req.params.id;
    productModel.findByIdAndDelete(productID)
    .then(()=>{
        console.log("product deleted suuccessfully");
    })
    .catch((error)=>{
        console.log("product not deleted")
    })
})

router.get('/editproduct/:id',(req,res)=>{
    const productId = req.params.id;
    productModel.findById(productId)
    .then((product)=>{
        res.json(product)
    })
    .catch(()=>{
        res.status(404).json("error")
    })
})

router.post('/editproduct/:id',(req,res)=>{
    const productId = req.params.id
    productModel.findByIdAndUpdate(productId,req.body)
    .then((product)=>{
        console.log(product);
        console.log(req.files.image);
        let Image = req.files.image
         Image.mv(path.join(`public/images/${product._id}.jpg`),(err)=>{
             if(err){
                 console.log(err);
                 res.status(500).json({error:"failed to upload image"})
             }else{
                 res.json(product)
                 console.log(product);
             }
         })
     })
     .catch((error)=>{
         res.json(error);
         console.log(error)
     })
})

export default router;