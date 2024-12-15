// App.js
import React from "react";
import "../App.css"; 
import kalakaar from '../assets/images/kalakaar.png'

function Navbar() {
  return (
    <nav>
      <div>
        <img
          src={kalakaar}
          id="company_name"
          className="company"
          alt="company_name"
        />
      </div>
      <div id="allbtn">
        <button>Explore</button>
        <button>Artist</button>
        <button>How it Works</button>
        <button>Activity</button>
        <button id="subscribe">Subscribe Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
