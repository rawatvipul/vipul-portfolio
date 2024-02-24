import React from "react";
import Typical from "react-typical";
import "./Home.css";

const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-deatils">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-telegram"></i>
              </a>
              <a
                href="https://www.instagram.com/vipul_rawat_01/"
                target="__blank"
              >
                <i className="fa fa-instagram"></i>
              </a>

              <a href="tel+:6396702962">
                <i className="fa fa-phone"></i>
              </a>
              
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/vipul-rawat-a55b9b2a2/">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {" "}
            Hello, I'm <span className="highlighted-text">Vipul</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {" "}
            <h1>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic ",
                  1200,
                  "Full Stack Developer",
                  1200,
                  "Mern Stack",
                  1200,
                  "Cross platform",
                  1200,
                  "Reactjs",
                  1200,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              kanck of building application with front and back end operations.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <a href="mailto: rawatvipul14@gmail.com" target="_blank">
          <button className="btn primary-btn">
            {""}
            Hire Me{" "}
          </button>
          </a>
          <a href="Resume.pdf" download="Vipul Resume.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
      
    </div>



  );
};

export default Home;
