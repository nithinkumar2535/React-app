import React,{useEffect,useRef,useState} from "react";
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'


function Editproduct(){

    const id = useParams()
    console.log(id);

    const [name,setName] = useState();
    const [des,setDes] = useState();
    const [price,Setprice] = useState();
    const [image,setImage] = useState(null);
    const [imageUrl,setImageUrl] = useState(null)

    

    useEffect(()=>{
        axios.get(`/api/editproduct/${id.productId}`)
        .then((result)=>{
            console.log(result);
            const {name,des,price,image} = result.data;
            setName(name);
            setDes(des);
            Setprice(price);
            setImage()
            setImageUrl(`/images/${id.productId}.jpg`);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id])
 

    
    const handleSubmit = (e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('name',name);
        formData.append('des',des);
        formData.append('price',price);
        formData.append('image',image);

        axios.post(`/api/editproduct/${id.productId}`,formData,{
            headers:{'content-type':'multipart/form-data'}
        })
        .then((result)=>{
            console.log(result);
            setName("");
            setDes("");
            Setprice("");
            navigate('/viewproduct')
            document.getElementById("customFileedit").value = "";
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const resetForm = ()=>{
        setName("");
        setDes("");
        Setprice("");
        setImage("")
        
    }

    return (
        <div className="container">

            <h1 className="mt-5">Edit Product</h1>
            <form style={{ width: '26rem' }} onSubmit={handleSubmit} className="mt-4">
                <div className="form-outline mb-4">
                    <input type="text" id="form4Example1" className="form-control" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    <label className="form-label" htmlFor="form4Example1">Name</label>
                </div>


                <div className="form-outline mb-4">
                    <textarea className="form-control" id="form4Example3" rows="4" name="des" value={des} onChange={(e)=>{setDes(e.target.value)}}></textarea>
                    <label className="form-label" htmlFor="form4Example3">Description</label>
                </div>


                <div className="form-outline mb-4">
                    <input type="text" id="form4Example2" className="form-control"  name="price" value={price}  onChange={(e)=>{Setprice(e.target.value)}}/>
                    <label className="form-label" htmlFor="form4Example2">Price</label>
                </div>

                <div>
                    <label className="form-label" htmlFor="customFile">Image</label>
                    <input type="file"  className="form-control" id="customFileedit" name="image" onChange={(e)=>{setImage(e.target.files[0]);setImageUrl(URL.createObjectURL(e.target.files[0]))}} />

                </div>
                <div>
                    <img src={imageUrl} alt=""  style={{maxWidth:"100px"}}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4 mt-4">Submit</button>
                <button  className="btn btn-warning btn-block mb-4 mt-4 ms-5"><Link to={'/viewproduct'}>View Product</Link></button>
                
            </form>
        </div>
    )
}

export default Editproduct;