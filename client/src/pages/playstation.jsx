import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PS = () => {
        return ( <>
    
    <div className='container'>
        <Navbar/>
        
        <section class="hero" id="hero">
            <img src="../assets/images/playstation-logo.jpg" alt="playstation logo" class="cards" />
             <p class="tagline">one site for all of your gaming stats&nbsp; $nbsp;</p>
             </section>
        <h3>New Users, sign in with your playstation username</h3>
        
        <div class="form" id="login">
            <form>
                <label for="Username"> Enter Playstation Username</label>
                <input type="text" placeholder="playstation Username" name="username" id="Username" class="login-input"/>
                    <p id="error"></p>
                    <button id="loginBtn" class="login-input" type="submit">Login</button>
            </form>
        </div>
    </div>
    
    <Footer/>
            </>
    );
};


export default PS; 