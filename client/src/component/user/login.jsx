import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link,useNavigate,useParams} from "react-router-dom";
import AdminProduct from "../product/AdminProduct";
import UserProduct from "../product/UserProduct";


function Login(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState('');
    

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('/api/',{withCredentials:true})
        .then((result)=>{
            if(result.data.valid){
                console.log("session active");
            }else{
                navigate('/login')
            }
        })
    },[])

    axios.defaults.withCredentials = true

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post('/api/login',{email,password})
        .then((response)=>{
            if(response.data.Login){
                console.log("Login suucessfully");
                navigate('/')
            }else{
                console.log(error,"login unsuccessfull");
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    
    return(
        <div className="container">
        <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Login</h1>

           
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  name="email" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  name="password" onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
            <p className="mt-5 mb-3 text-body-secondary">2024</p>
            <p>Don't have an account? <Link to={'/signup'}>Register</Link></p>
        </form>
        </div>
    )
}

export default Login;