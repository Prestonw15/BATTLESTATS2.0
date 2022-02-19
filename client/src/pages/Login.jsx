import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';
import Auth from '../graphql/auth';

const Login = (props) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const logmyassin = () => {
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
  
  return ( 
    <div class="form" id="login">
      <form onsubmit= {logmyassin}>
      
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Email" name="uname" required onChange={(e) => {setEmail(e.target.value)}}/>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => {setPassword(e.target.value)}}/>
      
          <button type="submit">Login</button>
        </div>
      
        <div class="container" style="background-color:#f1f1f1">
        </div>
      </form>
      </div>
  );
};

export default Login;
