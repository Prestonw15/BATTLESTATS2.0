import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Xbox = () => {
        return ( <>

    <div className='container'>
        <Navbar/>

        <section class="hero" id="hero">
            <img src="./assets/images/xbox-logo.svg" alt="xbox Logo" class="cards" />
             <p class="tagline">one site for all of your gaming stats&nbsp; &nbsp;</p>
         </section>

        <h3>New Users, Click <a target="_blank" href="https://cors-anywhere.herokuapp.com/corsdemo">this </a>link and hit 'Request temporary access to the demo server' before continuing</h3>

        <div class="form" id="login">
            <form >
                <label for="Username"> Enter XBOX Gamertag</label>
                <input type="text" placeholder="XBOX Gamertag" name="username" id="Username" class="login-input"/>
                    <p id="error"></p>
                    <button id="loginBtn" class="login-input" type="submit">Login</button>
            </form>
        </div>

    </div>
    
    <Footer/>
            </>

    );
};



export default Xbox;