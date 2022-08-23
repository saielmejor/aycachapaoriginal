import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import '../components/Menu.css'


function Menu() {
  return (
    <>
    
      <div className="menu-container">
    <div className="menu-h1"><h1> MENU</h1></div>
        <div className="menu-image-container"> 
        <img classname="menu-image"src="/image/menu.jpg"></img>
        </div>
        
      </div>
      
      <Footer/>
    </>
  );
}

export default Menu;
