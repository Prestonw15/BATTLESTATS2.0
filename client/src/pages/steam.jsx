import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/steam.css';

const Steam = () => {
        return ( <>
    <div className='container'>
        <Navbar/>
        
        <section className={styles.hero} id="hero">
            <img src={require('../assets/images/steam-icon.svg').default} alt="steam logo" class="cards" />
             <p className='tagline'>one site for all of your gaming stats&nbsp; &nbsp;</p>
         </section>
        <h3>New Users, Please enter you steam username</h3>
        
        <div className='form' id="login">
            <form>
                <label for="Username">Enter Steam username</label>
                <input type="text" placeholder="Steam User" name="username" id="Username" class="login-input"/>
                    <p id="error"></p>
                    <button id="loginBtn" className='login-input' type="submit">Login</button>
            </form>
        </div>
        
    </div>
    
    <Footer/>
            </>
            
    );
};


export default Steam;