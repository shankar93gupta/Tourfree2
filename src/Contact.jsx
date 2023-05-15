import React from "react";
import "./contact.css"

const Contact = ()=>{
    return(
        <>
           <h1>Contact Us;</h1>
        <form action="/Contact" method="post">
        <input type="name" className="Myinput" name="contact" placeholder="Enter Your Name" />
        <input type="phone" Class="Myinput" name="contact" placeholder="Enter your Contact Number" />
        <input type="email"  Class="Myinput"  name="Email"placeholder="Enter your E-Mail" />
        <input type="text" Class="Myinput" name="consern" placeholder= "Enter your Consern" />
        <input class = "btn" type="submit" value="Submit" onclick="showSuccess()"></input>
        </form>
     
      
        </>
    )
}

export default Contact;