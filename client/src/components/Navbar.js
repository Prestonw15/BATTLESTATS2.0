import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/loginstyle.css";

const Navbar = () => {
return( <>
    <header>
    {/* <Link to="./Dashboard"> <img className="logo" src={require('./assets/images/battlestats_logo.svg').defualt} alt="Battlestats logo"/> </Link> */}
    <nav>
      <ul>
        <li><Link to="./steam">STEAM</Link></li>
        <li><Link to="./xbox">XBOX</Link></li>
        <li><Link to="./playstation">PLAYSTATION</Link></li>
        <li><Link to="./messaging">MESSAGING</Link></li>
      </ul>
    </nav>
  </header>
    <section className='hero' id="hero">
    <h2 className='hero_header'>BATTLE&nbsp; <span className='light'>STATS</span></h2>
    <p className='tagline'>one site for all of your gaming stats&nbsp; &nbsp;</p>
   
  </section>
  </>
)
}

export default Navbar;