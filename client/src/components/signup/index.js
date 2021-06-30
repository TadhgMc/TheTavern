import React from 'react'

const signupFormSubmit = async (event) => {
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
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  }

};

const SignUp = () => {
  return (
    <form>
      <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
      <div class="form-floating">
        <input type="text" class="form-control" id="username-signup" placeholder="name@example.com"/>
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input type="email" class="form-control" id="email-signup" placeholder="name@example.com"/>
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="password-signup" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="password-signup-validation" placeholder="Password"/>
        <label for="floatingPassword">Re-Enter Password</label>
      </div>
      <button onClick={signupFormSubmit} class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
    </form>
  )
}

export default SignUp