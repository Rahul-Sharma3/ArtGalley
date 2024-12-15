import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Samples from "./components/AuctionSection.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
       <Hero />
       
    <center><hr/></center>
      <Samples />
      <br/>
    <center><hr/></center>
      <Footer /> 
    </div>
  );
}

export default App;
