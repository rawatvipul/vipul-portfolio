import React from "react";
import "./About.css";
// import Footer from "./Footer";

const About = () => {
  return (
    <div className="about-container">
        <div className="content">
                <h1 className="me">AboutME </h1>
                
                <div className="line"></div>
            <div className="information">
                <div className="image">
                    <img className="pic" src="./vipul.jpg" alt="my photo"></img>
                </div>
                <div className="Para">
                    <p className="para-text">Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a MCA willing to be an asset for an organization.</p>
                    <div>
                    <ul>
                        <li className="head">Here area a few Highlights :</li>
                        <li className="imp">Full Stack web and mobile development</li>
                        <li className="imp">Interactive Front End as per the design</li>
                        <li className="imp">Redux for State Management</li>
                        <li className="imp">Building REST API</li>
                        <li className="imp">Managing Database</li>
                    </ul>
                </div>
                <div className="buttons">
                    <a className="btn hire-me" href="mailto: rawatvipul14@gmail.com" target="_blank">
                        Hire Me
                    </a>
                    <a className="btn resume" href="Resume.pdf" target="_blank">
                        Resume
                    </a>
                </div>
                </div>
                
            </div>
    
        </div>
        
    </div>
    
  );
};

export default About;
