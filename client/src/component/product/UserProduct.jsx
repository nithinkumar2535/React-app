import { useEffect, useState } from "react";
import axios from 'axios'



function UserProduct(){

    const [name,setName] = useState()
    const [product,setProduct] = useState([]);


    useEffect(()=>{
        axios.get('/api/userproduct')
        .then((response)=>{
            setProduct(response.data)
           
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

   
        

        axios.get('/api/',{withCredentials:true})
        .then((result)=>{
            if(result.data.valid){
                console.log("loggedin");
                setName(result.data.username)
            }else{
                console.log("not login");
            }
        })





    return(
        <div className="container">
            <h1>Products</h1>
            <div className="row m-4">
            {product.map((product,index)=>(
                <div key={index} className="card m-4" style={{ width: '18rem' }}>
                    <img src={`http://localhost:3000/images/${product._id}.jpg`} className="card-img-top" alt="..." style={{maxWidth:"200px",height:"200px",objectFit:"cover"}}/>
                    <div  className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.des}</p>
                        <p className="card-text">{product.price}</p>
                        <button className="btn btn-warning">Add to cart</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default UserProduct;