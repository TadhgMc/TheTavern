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
    .then(document.location.replace('/profile'))
  }
};

const Login = () => {
  return (
    <form>
      <h1 className="h3 mb-3 fw-normal">Please Login</h1>
      <div className="form-floating">
        <input type="email" className="form-control" id="email-login" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="password-login" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
      <button onClick={loginFormHandler} className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
      <h3 className="h3 mb-3 fw-normal">Don't Have An Account? Sign Up <a href="/signup" role="button"><Link to='/signup'>Here</Link></a></h3>

    </form>
  )
}

export default Login
