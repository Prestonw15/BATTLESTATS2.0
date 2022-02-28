import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../assets/css/xbox.css';

const Xbox = () => {
        return ( <>

    <div className={styles.container}>
        <Navbar/>

        <section className={styles.hero} id="hero">
            <img src={require('../assets/images/Xbox-Logo.wine.svg').default} alt="xbox Logo" className="cards" />
             <p className='tagline'>one site for all of your gaming stats&nbsp; &nbsp;</p>
         </section>

        <h3>New Users, Click <a target="_blank" href="https://cors-anywhere.herokuapp.com/corsdemo">this </a>link and hit 'Request temporary access to the demo server' before continuing</h3>

        <div className={styles.form} id="login">
            <form >
                <label for="Username"> Enter XBOX Gamertag</label>
                <input type="text" placeholder="XBOX Gamertag" name="username" id="Username" className="login-input"/>
                    <p id="error"></p>
                    <button id="loginBtn" className='login-input' type="submit">Login</button>
            </form>
        </div>

    </div>
    
    <Footer/>
            </>

    );
};



export default Xbox;