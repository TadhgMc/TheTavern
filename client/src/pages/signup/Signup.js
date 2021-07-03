import React from 'react'
import API from '../../utils/api';

const signupFormSubmit = (event) => {
  event.preventDefault();
  //get signup form id's
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const passwordValidation = document.querySelector('#password-signup-validation').value.trim();



  if (password !== passwordValidation) {
    alert('Passwords must match')
  } else {
    if (username && email && password) {
      API.createUser({
        username: username,
        password: password,
        email: email
      })
      .then(console.log("signup complete"))
      .catch(err => console.log(err));
    } 
    
  }

};

const SignUp = () => {
  return (
    <form className = "container ">
      <div className = "text-center row mb-3" style = {{margin: "15vw 0vw 15vw 0vw"}}>
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
      </div>
      <div className="form-floating row mb-3">
        <input type="text" className="form-control" id="username-signup" placeholder="name@example.com"/>
        <label for="floatingInput">Username</label>
      </div>
      <div className="form-floating row mb-3">
        <input type="email" className="form-control" id="email-signup" placeholder="name@example.com"/>
        <label for="floatingInput">Email</label>
      </div>
      <div className="form-floating row mb-3">
        <input type="password" className="form-control" id="password-signup" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
      <div className="form-floating row mb-3">
        <input type="password" className="form-control" id="password-signup-validation" placeholder="Password"/>
        <label for="floatingPassword">Re-Enter Password</label>
      </div>
      <div className = "row mb-3 justify-content-center">
        <button onClick={signupFormSubmit} className="w-50 btn btn-lg btn-primary" type="submit">Sign Up</button>
      </div>
    </form>
  )
}

export default SignUp