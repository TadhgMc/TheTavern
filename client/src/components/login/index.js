import React from 'react'

const loginFormHandler = async (event) => {
  event.preventDefault();
  
  //get login form id's
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    try {
      const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('/'); }
    } catch(error) {
      alert(error.message)
    }
  }
};

const Login = () => {
  return (
    <form>
      <h1 class="h3 mb-3 fw-normal">Please Login</h1>
      <div class="form-floating">
        <input type="email" class="form-control" id="email-login" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="password-login" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
      <button onClick={loginFormHandler} class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
    </form>
  )
}

export default Login
