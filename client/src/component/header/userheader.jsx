import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";


function Userheader() {

  const navigate = useNavigate();
  
  const Logout = (e)=>{
    e.preventDefault()
    axios.post('/api/logout')
    .then((result)=>{
      navigate('')
    })
    .catch((err)=>{
      console.log(err);
    })
  }

 
  useEffect(()=>{
    axios.get('/api/')
    .then((response)=>{
    })
    .catch((error)=>{
        console.log(error);
    })
},[])

  

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='container d-flex align-items-center justify-content-between'>
        <div>
          <Link to={'/'}><img src="http://localhost:3000/images/cart.png" alt="" style={{ maxWidth: "50px" }} /></Link>
        </div>
        <div className='d-flex align-items-center'>
          <input type="text" placeholder='Search products here ...' style={{width:"300px",height:"35px"}} className='rounded-start-pill p-2 rounded-end-0'/>
          <div  className=' fs-3 bg-dark text-white d-flex align-items-center rounded-end-pill rounded-start-0' style={{display:"flex", width:"40px",height:"35px"}} >
            <CiSearch/>
          </div>
        </div>
        <div className='d-flex   '>
          <div className='fs-2 mx-1'>
            <FaRegCircleUser/>
          </div>
          <div className='fs-2 mx-1'>
            <FaShoppingCart />
          </div>
          <div className='align-items-start'>
            <Link to={'/login'}><button>Login</button></Link>
          </div>
        </div>
      </div> 

    </nav>
    
  );
};


export default Userheader;
