import React from 'react';

function AdminHeader() {
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
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addproduct">Add products</a>
            </li>
          </ul>
        </div>
        <div className='ms-5 d-flex' style={{position:"relative",left:"900px"}}>
          <form className="form-inline my-2 my-lg-0 d-flex">
            <input className="form-control mr-sm-2 me-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default AdminHeader;
