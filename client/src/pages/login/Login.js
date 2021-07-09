import React from 'react'
import { Link } from "react-router-dom";
import API from '../../utils/api';


const loginFormHandler = (event) => {
  event.preventDefault();
  
  //get login form id's
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    API.login({
      email: email,
      password: password
    })
    .then()
  }
};

const Login = () => {
  return (
    <form className = "container" >
      <div className = "row mb-3" style = {{margin: "15vw 0vw 15vw 0vw"}}>
      <h1 className="h3 mb-3 fw-normal text-center">Please Login</h1>
      <div className="form-floating row mb-3">
        <input type="email" className="form-control" id="email-login" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating row mb-3">
        <input type="password" className="form-control" id="password-login" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
      <div className = "text-center">
        <button onClick={loginFormHandler} className="w-50 btn btn-lg btn-primary" type="submit"><Link className='text-dark' to='/profile'>Login</Link></button>
        <h3 className="h3 mb-3 fw-normal text-center">Don't Have An Account? Sign Up <Link to='/signup'>Here</Link></h3>
      </div>
      </div>

    </form>
  )
}

export default Login
