import express from 'express';
import userModel from '../models/userModel.js';


const router = express.Router();


router.get('/',(req,res)=>{
    if(req.session.name){
        console.log(req.session.name);
        res.json({valid:true,username:req.session.name,admin:req.session.admin})
    }else{
        res.json({valid:false})
    }
})

router.post('/signup',(req,res)=>{
    userModel.create(req.body)
    .then((user)=>{
        res.json(user)
    })
    .catch((error)=>{
        res.json(error)
    })
})

router.post('/login',(req,res)=>{
    const {email,password} = req.body;
    userModel.findOne({email:email})
    .then((user)=>{
        if(user){
            if(user.password ===password){
                req.session.username = user.name;
                req.session.admin = user.admin;
                console.log(user.name);
                res.json({Login:true});
            }else{
                res.json("Passsword Incorrect")
            }
        }else{
            res.json("User not found")
        }
    })
    .catch((error)=>{
        res.status(500).json(error);
        console.log(error);
    })
})

router.post('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("error destroying the session");
            res.status(500).send("internal server error")
        }else{
            res.json("logout successfully")
        }
    })
})

export default router;