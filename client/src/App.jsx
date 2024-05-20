import React,{useState,useEffect} from "react";
import Addproduct from "./component/product/addproduct";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import axios from "axios";
import UserProduct from "./component/product/UserProduct";
import AdminProduct from "./component/product/AdminProduct";
import Editproduct from "./component/product/editproduct";
import Signup from "./component/user/signup";
import Login from "./component/user/login";

function App() {
  const admin=false;
  return (
    

   
      <Routes>
        <Route path="/"  element ={<UserProduct/>}></Route>  
        <Route path="/addproduct" element = {<Addproduct/>}></Route>
        <Route path="/adminproduct" element ={<AdminProduct/>}></Route>
        <Route path="/editproduct/:productId" element ={<Editproduct/>}></Route>
        <Route path="/signup" element ={<Signup/>}></Route>
        <Route path="/login" element ={<Login/>}></Route>
        <Route path="/logout" element ={<Login/>}></Route>
      </Routes>

  )
}

export default App
