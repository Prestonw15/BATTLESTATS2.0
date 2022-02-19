import React from "react";
import "../css/loginstyle.css"

const Navbar = () => {
return( <>
    <header><a href="">
    <img className="logo" src="./assets/images/battlestats_logo.svg"/>
    </a>
    <nav>
      <ul>
        <li><a href="./steam.html">STEAM</a></li>
        <li><a href="./xbox.html">XBOX</a></li>
        <li><a href="./playstation.html">PLAYSTATION</a></li>
        <li><a href="./messaging.html">MESSAGING</a></li>
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