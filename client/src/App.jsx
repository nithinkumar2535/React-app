import React,{useState,useEffect} from "react";
import Addproduct from "./component/product/addproduct";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import axios from "axios";
import UserProduct from "./component/product/UserProduct";
import AdminProduct from "./component/product/AdminProduct";
import Editproduct from "./component/product/editproduct";
import AdminHeader from "./component/header/adminheader";
import Userheader from "./component/header/userheader";
import Signup from "./component/user/signup";
import Login from "./component/user/login";

function App() {
  const admin=false;
  return (
    <BrowserRouter >
      {admin?(<AdminHeader/>):(<Userheader/>)}
   
      <Routes>
        <Route path="/"  element ={<UserProduct/>}></Route>  
        <Route path="/userproduct"  element ={<UserProduct/>}></Route>  
        <Route path="/addproduct" element = {<Addproduct/>}></Route>
        <Route path="/adminproduct" element ={<AdminProduct/>}></Route>
        <Route path="/editproduct/:productId" element ={<Editproduct/>}></Route>
        <Route path="/signup" element ={<Signup/>}></Route>
        <Route path="/login" element ={<Login/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
