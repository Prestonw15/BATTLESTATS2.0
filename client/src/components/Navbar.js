import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
return( <>
    <header>
    <Link to="./Dashboard"> <img className="logo" src="./assets/images/battlestats_logo.svg" alt="Battlestats logo"/> </Link>
    <nav>
      <ul>
        <li><Link to="./steam">STEAM</Link></li>
        <li><Link to="./xbox">XBOX</Link></li>
        <li><Link to="./playstation">PLAYSTATION</Link></li>
        <li><Link to="./messaging">MESSAGING</Link></li>
      </ul>
    </nav>
  </header>
    <section class="hero" id="hero">
    <h2 class="hero_header">BATTLE&nbsp; <span class="light">STATS</span></h2>
    <p class="tagline">one site for all of your gaming stats&nbsp; &nbsp;</p>
   
  </section>
  </>
)
}

export default Navbar;