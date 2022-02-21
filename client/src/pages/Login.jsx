import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';
import Auth from '../graphql/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/"

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
