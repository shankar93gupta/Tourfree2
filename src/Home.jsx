import React from "react";
import "./Home.css"
const Home = ()=>{
    return(
        <>
        <section id ="introsection">
            <div className="big">
                <p className="big">Join Tournaments</p>
            </div>
            <div className="small">
                <p>At 0 entery fees</p>
            </div>
        </section> 

        <section id="sponsers">
            <div className="heading">
                <p>Feature Tournaments</p>
            </div>
            <div className="boxes">
                <div className="boxes-items">
                    <img className="img" src="https://www.megaidea.net/wp-content/uploads/2019/09/free-fire-1024x638.png"alt="Img can't load" />
                    <h1>Squad barmuda</h1>
                    <p>Tommarow 2pm onwards and the first prize is Rs200/- </p>
                    <a className="anchor"href="./Contact">Join</a>
                </div>
                <div className="boxes-items">
                    <img className="img" src="https://cdn141.picsart.com/273861435009211.png?r1024x1024"alt="Img can't load" />
                    <h1>Duo barmuda</h1>
                    <p>Tommarow 2pm onwards and the first prize is Rs200/- </p>
                    <a className="anchor" href="./Contact">Join</a>
                </div>
                <div className="boxes-items">
                    <img className="img"src="http://cdn141.picsart.com/274715643034211.png"alt="Img can't load" />
                    <h1>Solo barmuda</h1>
                    <p>Tommarow 2pm onwards and the first prize is Rs200/- </p>
                    <a className="anchor" href="./Contact">Join</a>
                </div>
                <div className="img1">
                    <img src="" alt="" />
                </div>
            </div>

        </section>

        </>
    )
}

export default Home;