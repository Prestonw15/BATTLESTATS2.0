import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/playstation.css';
const PS = () => {
        return ( <>
    
    <div className={styles.container}>
        <Navbar/>
        
        <section className='hero' id="hero">
            <img src={require('../assets/images/playstation-logo.jpg').default} alt="playstation logo" class="cards" />
             <p className='tagline'>one site for all of your gaming stats&nbsp; $nbsp;</p>
             </section>
        <h3>New Users, sign in with your playstation username</h3>
        
        <div className='form' id="login">
            <form>
                <label for="Username"> Enter Playstation Username</label>
                <input type="text" placeholder="playstation Username" name="username" id="Username" class="login-input"/>
                    <p id="error"></p>
                    <button id="loginBtn" className='login-input' type="submit">Login</button>
            </form>
        </div>
    </div>
    
    <Footer/>
            </>
    );
};


export default PS; 