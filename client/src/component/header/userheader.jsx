import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';


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
        console.log(response)
    })
    .catch((error)=>{
        console.log(error);
    })
},[])

  

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="http://localhost:3000/images/cart.png" alt="" style={{ maxWidth: "50px" }} />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className='me-5'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Deals</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className='ms-5 d-flex' style={{position:"relative",left:"900px"}}>
          <form className="form-inline my-2 my-lg-0 d-flex">
            <input className="form-control mr-sm-2 me-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          {/* {isLoggedIn ? (<button className='btn btn-warning ms-2' onClick={Logout}>Logout</button>) :(<Link to={'/login'}><button className='btn btn-warning ms-2'>Login</button></Link>)} */}
          <button className='btn btn-warning ms-2' onClick={Logout}>Logout</button>
          <Link to={'/signup'}><button className='btn btn-warning ms-2'>Register</button></Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </div>
      </div>
    </nav>
    
  );
};


export default Userheader;
