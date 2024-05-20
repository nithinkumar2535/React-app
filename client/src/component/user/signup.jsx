import axios, { AxiosHeaders } from "axios";
import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function Signup(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isSignedUp,setIsSignedUp] =useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('/api/signup',{name,email,password})
        .then((result)=>{
            console.log(result);
            setIsSignedUp(true)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        if(isSignedUp){
            navigate('/login')
        }
    },[isSignedUp,navigate])



    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Sign-Up</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="name@example.com" name="name" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="floatingInput">Name</label>
                </div>

                <div className="form-floating mt-4">
                    <input type="email" className="form-control" placeholder="name@example.com" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mt-4">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
                <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
            </form>
            <p>Already have an account? <Link to={'/login'}>Login</Link></p>

        </div>
    )
}

export default Signup;