import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';
import Auth from '../graphql/auth';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useMutation(LOGIN_USER);
  const logmyassin = async (e) => {
    e.preventDefault()
     await login({
      variables: {email: email, password: password }
    }) 
    Auth.login(data?.login.token)
    console.log(error)
  }
  useEffect(() => {
    if (data && data.login) {
      props.setUser({ token: data.login.token, author: data.login.author });
    }
  }, [data]);
  
  return ( <>
      <Navbar/>
    <div className="form" id="login">
      <form onSubmit= {logmyassin}>

      <div className="container">
         <form action="/action_page.php">
            <div class="row">
              <h2>Login with Social Media or Manually</h2>
            <div class="vl">
            <span class="vl-innertext">or</span>
      </div>

      <div class="col">
        <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>
        <a href="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" class="google btn">
          <i class="fa fa-google fa-fw"></i> Login with Google+
        </a>
      </div>

      <div class="col">
        <div class="hide-md-lg">
          <p>Or sign in manually:</p>
        </div>

        <input type="text" placeholder="Enter Email" name="uname" required onChange={(e) => {setEmail(e.target.value)}}/>
        <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => {setPassword(e.target.value)}}/>
        <button type="submit">Login</button>
      </div>

    </div>
  </form>
</div>

<div class="bottom-container">
  <div class="row">
    <div class="col">
      <Link to="./signup"  class="btn">Sign up</Link>
    </div>
    <div class="col">
      <Link to="#" style="color:white" class="btn">Forgot password?</Link>
    </div>
  </div>
</div>
      




      
        <div className="container">
          <label htmlFor="uname"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="uname" required onChange={(e) => {setEmail(e.target.value)}}/>
      
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => {setPassword(e.target.value)}}/>
      
          <button type="submit">Login</button>
        </div>
      
        <div className="container">
        </div>
      </form>
      </div>
      <Footer/>
      </>
  );
};

export default Login;
