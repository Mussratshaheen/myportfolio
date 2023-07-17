import React from "react";
import Typical from "react-typical";
import "./Profile.css";


const Profile = () => {
  

  return (
    
    <div className="profile-container">
    
      <div className="profile-parent">
      
        <div className="profile-details">
      
        <div className="cols">
          
            <div className="cols-icon">

            
              <a href=" https://github.com/Mussratshaheen">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.google.com">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/mussrat-shaheen-b84072250/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href=" https://github.com/Mussratshaheen">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Mussrat</span>
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
                    "Frontend Developer ",
                    2000,
                    "Full Stack Developer ",
                    2000,
                    "React/React Native Dev",
                    2000,
                    "Cross Platform v ",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              <a href="contact"style={{color:"aliceblue"}}>Hire Me</a>{" "}
            </button>
            <a href="Mussrat CV.pdf" download="Shaheen Mussrat CV.pdf">
              <button className="btn highlighted-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
