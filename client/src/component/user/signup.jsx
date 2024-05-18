import axios, { AxiosHeaders } from "axios";
import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function Signup(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [admin,setAdmin] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('/api/signup',{name,email,password,admin})
        .then((result)=>{
            console.log(result);
            navigate('/login')
            
        })
    }



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

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true" onChange={(e)=>{setAdmin(e.target.value)}} checked={admin===true} />
                    <label className="form-check-label" htmlFor="inlineRadio1">True</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false" onChange={(e)=>{setAdmin(e.target.value)}} checked={admin===false} />
                    <label className="form-check-label" htmlFor="inlineRadio2">False</label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
                <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
            </form>
            <p>Already have an account? <Link to={'/login'}>Login</Link></p>

        </div>
    )
}

export default Signup;