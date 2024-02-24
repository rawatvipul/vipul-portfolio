import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div className="nav">
            <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">AboutMe</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                {/* <li><Link to="/testinomial">Testimonial</Link></li> */}
                <li><Link to="/contact">ContactMe</Link></li>
            </ul>
                <button className="menu-icon">
                    <i className="fa fa-bars"></i>
                </button>
        </div>
    )
}

export default Nav;