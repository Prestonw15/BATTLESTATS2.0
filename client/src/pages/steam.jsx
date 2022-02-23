import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Steam = () => {
        return ( <>
    <div classname='container'>
        <Navbar/>
        
        <section class="hero" id="hero">
            <img src={require('../assets/images/steam-icon.svg').default} alt="steam logo" class="cards" />
             <p class="tagline">one site for all of your gaming stats&nbsp; &nbsp;</p>
         </section>
        <h3>New Users, Please enter you steam username</h3>
        
        <div class="form" id="login">
            <form>
                <label for="Username">Enter Steam username</label>
                <input type="text" placeholder="Steam User" name="username" id="Username" class="login-input"/>
                    <p id="error"></p>
                    <button id="loginBtn" class="login-input" type="submit">Login</button>
            </form>
        </div>
        
    </div>
    
    <Footer/>
            </>
            
    );
};


export default Steam;