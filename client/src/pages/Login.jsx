import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';
import Auth from '../graphql/auth';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/loginstyle.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, error }] = useMutation(LOGIN_USER);
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
  }, [data, props]);
  
  return ( <>
      <Navbar/>
    <div className="form" id="login">
      <form onSubmit= {logmyassin}>

      <div className={styles.container}>
         <form action="/action_page.php">
            <div className={styles.row}>
              <h2>Login with Social Media or Manually</h2>
            <div class="vl">
            <span class="vl-innertext">or</span>
      </div>

      <div class="col">
        <Link to="Facebook" class="fb btn">
          <i className='fa fa-facebook fa-fw'></i> Login with Facebook
        </Link>
        <Link to="Twitter" class="twitter btn">
          <i className='fa fa-twitter fa-fw'></i> Login with Twitter
        </Link>
        <Link to="google" class="google btn">
          <i class="fa fa-google fa-fw"></i> Login with Google+
        </Link>
      </div>

      <div className={styles.col}>
        <div className='hide-md-lg'>
          <p>Or sign in manually:</p>
        </div>

        {/* <input type="text" placeholder="Enter Email" name="uname" required onChange={(e) => {setEmail(e.target.value)}}/>
        <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => {setPassword(e.target.value)}}/>
        <button type="submit">Login</button> */}
      </div>

    </div>
  </form>
</div>

<div className='bottom-container'>
  <div className='row'>
    <div className='col'>
      <Link to="./signup"  className='btn'>Sign up</Link>
    </div>
    <div className='col'>
      <Link to="#" className='btn'>Forgot password?</Link>
    </div>
  </div>
</div>
      




      
        <div className={styles.col}>
          <label htmlFor="uname"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="uname" required onChange={(e) => {setEmail(e.target.value)}}/>
      
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => {setPassword(e.target.value)}}/>
      
          <button type="submit">Login</button>
        </div>
      </form>
      </div>
      <Footer/>
      </>
  );
};

export default Login;
