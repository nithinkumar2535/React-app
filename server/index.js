import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import prouctModel from './helper/product-helper.js';
import fileUpload from 'express-fileupload';
import path from 'path'
import userModel from './helper/user-helper.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';




const app = express();
const port = 3000;

app.use(cors({
    origin:['http://localhost:5173'],
    methods:["POST","GET"],
    credentials:true
}))
app.use(bodyParser.json());
app.use('/images',express.static('public/images'));
app.use(fileUpload())
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:1000*60
    }
}));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/samplecrud')
.then(()=>{
    console.log("Database connected to successfully");
})



app.get('/api/',(req,res)=>{
    if(req.session.name){
        console.log(req.session.name);
        res.json({valid:true,username:req.session.name})
    }else{
        res.json({valid:false})
    }
})


app.get('/api/userproduct',(req,res)=>{
    prouctModel.find()
    .then((products)=>{
        res.json(products)
    })
    .catch((error)=>{
        res.json(error);
    })
})

app.post('/api/addproduct',(req,res)=>{
    prouctModel.create(req.body)
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
app.get('/api/adminproduct',(req,res)=>{
    prouctModel.find()
    .then((product)=>{
        res.json(product);

    })
    .catch((error)=>{
        res.json(error)
    })
})
app.delete('/api/deleteproduct/:id',(req,res)=>{
    const productID = req.params.id;
    prouctModel.findByIdAndDelete(productID)
    .then(()=>{
        console.log("product deleted suuccessfully");
    })
    .catch((error)=>{
        console.log("product not deleted")
    })
})

app.get('/api/editproduct/:id',(req,res)=>{
    const productId = req.params.id;
    prouctModel.findById(productId)
    .then((product)=>{
        res.json(product)
    })
    .catch(()=>{
        res.status(404).json("error")
    })
})

app.post('/api/editproduct/:id',(req,res)=>{
    const productId = req.params.id
    prouctModel.findByIdAndUpdate(productId,req.body)
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

/* user */

app.post('/api/signup',(req,res)=>{
    userModel.create(req.body)
    .then((user)=>{
        res.json(user)
    })
    .catch((error)=>{
        res.json(error)
    })
})


app.post('/api/login',(req,res)=>{
    const {email,password} = req.body;
    userModel.findOne({email:email})
    .then((user)=>{
        

        if(user){
            /* if(user.password ===password && user.admin===true){
                req.session.username = user.name
                res.json({LoginAdmin:true});
                
            }else  */if(user.password ===password && user.admin===false){
                req.session.username = user.name
                console.log(user.name);
                res.json({LoginUser:true});
            }else{
                res.json("user not found")
            }
        }
    })
    .catch((error)=>{
        res.status(500).json(error);
        console.log(error);
    })
})

app.post('/api/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("error destroying the session");
            res.status(500).send("internal server error")
        }else{
            res.json("logout successfully")
        }
    })
})






app.listen(port,()=>{
    console.log("server running");
})