import React from "react";
// import { FaFacebookSquare,FaYoutubeSquare,FaInstagramSquare } from 'react-icons/fa';
import './Navbar1.css';
const Navbar = ()=>{
    return(
        <>
        <nav id="navbar">
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./About">About</a></li>
                <li><a href="./">Payments</a></li>
                <li><a href="./Contact">Contact</a></li>
            </ul>
        </nav>
     

       

        </>
    )
      
}

export default Navbar;