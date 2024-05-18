import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function AdminProduct(){


    const [product,setProduct]= useState([])


    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('/api/adminproduct')
        .then((response)=>{
            setProduct(response.data);
        })
        .catch((error)=>{
                console.log(error);
        })
    },[])

    function deleteProduct(productId){
        axios.delete(`/api/deleteproduct/${productId}`)
        .then((response)=>{
            console.log("responded")
        })
        .catch((error)=>{
            console.log(error);
            console.log("errooror");
        })
    }
    function editProduct(productId){
        axios.get(`/api/editproduct/${productId}`)
        .then(()=>{
            navigate(`/editproduct/${productId}`)
        })
    }

  

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Edit Product</th>
                        <th scope="col">Delete Product</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product,index)=>{    
                     return(
                        <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{product.name}</td>
                        <td>{product.des}</td>
                        <td>{product.price}</td>
                        <td><img src={`http://localhost:3000/images/${product._id}.jpg`} className="img-fluid" alt="..." style={{maxWidth:"100px"}}/></td>
                        <td><button className="btn btn-warning" onClick={()=>{editProduct(product._id)}}>Edit-product</button></td>
                        <td><button className="btn btn-warning" onClick={()=>{deleteProduct(product._id)}} >Delete-product</button></td>
                        
                    </tr>
                     )  

                    })}
                    
                </tbody>
            </table>
        </div>

    )
}

export default AdminProduct;