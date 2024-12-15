// HeroSection.js
import React from "react";
import "../App.css"; 
import img from '../assets/images/hero_image.png'
function HeroSection() {
  return (
    <section id="hero">
      <div id="hero_content">
        <h1>
          Discover and Collect The Best NFTs <span>Digital art</span>
        </h1>
        <br />
        <p>
          Discover a world of captivating digital art at our store, where
          creativity knows no bounds. Immerse yourself in a collection of
          stunning digital masterpieces, meticulously crafted by talented
          artists. From vibrant illustrations to mesmerizing abstracts, find the
          perfect piece to elevate your space and inspire your imagination.
          Explore our digital art store today!
        </p>
        <div className="center-buttons">
          <button>Explore Now</button>
          <button>Learn More</button>
        </div>
      </div>
      <div id="hero_img" >
        <img src={img} width="800px" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
