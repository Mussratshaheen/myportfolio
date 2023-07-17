import React from "react";
import "./Project.css";
import img1 from "../../assets/Home/drum.png";
import img3 from "../../assets/Home/img.png";
import img2 from "../../assets/Home/markdown2.png";

import img4 from "../../assets/Home/calculator.png";
import img5 from "../../assets/Home/dashboard02.png";
const Card = () => {
  return (

    
    <div className="grand-parent" style={{background:"radial-gradient(#e5e5e5, #ffff,#e5e5e5)"}}>
 <h2>projects</h2>
    <hr style={{ marginBottom:"4rem"}}/>
      <div className="row">

     




      
          <div className="card text-center">
            <div className="overflow">
              <img src="http://howtocoder.com/img/Random-Quote-Machine.PNG" className="card-img-top" alt="..."style={{ width: "30rem", height: "27rem" }} />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Quote-Machine</h4>
              <p className="card-text text-secondary">
              I used HTML, JavaScript, CSS, Bootstrap, SASS, and jQuery to complete this project.
              My quote machine should fetch the new quote's author when the new-quote button
              is clicked and display it in the author element.

              </p>
              <div className="button">
                <a
                  href="https://mussratshaheen.github.io/RandomQuote-Machine/"
                  className="btn btn-primary"
                >
                  Live Preview
                </a>
                <a
                  href="https://github.com/Mussratshaheen/RandomQuote-Machine"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
      


        
          <div className="card text-center">
            <div className="overflow">
              <img src={img1} className="card-img-top" alt="image1"style={{ width: "30rem", height: "27rem" }} />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Drum Machine</h4>
              <p className="card-text text-secondary">
              I can use 9 clickable drum pad elements,When I press the trigger key associated
with each .drum-pad, the audio clip contained in its child audio element should be
triggered and a string describing the associated audio clip is displayed as the inner
text of the display element.
I create this using HTML, JavaScript, CSS, Bootstrap.

              </p>
              <div className="button">
                <a
                  href="https://mussratshaheen.github.io/Drummachine/"
                  className="btn btn-primary"
                >
                  Live Preview
                </a>
                <a
                  href="https://github.com/Mussratshaheen/Drummachine"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        
          <div className="card text-center">
            <div className="overflow">
              <img src={img3} className="card-img-top" alt="image3" style={{ width: "30rem", height: "27rem" }}/>
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Pomodoro Clock</h4>
              <p className="card-text text-secondary">
              The Pomodoro Technique is a time-management framework which is as simple as
              it is effective - I use a timer to break my work into time blocks (usually 25 minutes),
              separated by a 5 minute break.I create this using Html,css and javascript.
              </p>
              <div className="button">
                <a
                  href="https://mussratshaheen.github.io/PomodoroClock/"
                  className="btn btn-primary"
                >
                  Live Preview
                </a>
                <a
                  href="https://github.com/Mussratshaheen/PomodoroClock"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
      


      
          <div className="card text-center">
            <div className="overflow">
              <img src={img4} className="card-img-top" alt="image4" style={{ width: "30rem", height: "27rem" }}/>
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Js Calculator</h4>
              <p className="card-text text-secondary">
              Built responsive calculator using javascript,html and css.

              </p>
              <div className="button">
                <a
                  href="https://mussratshaheen.github.io/calculator/"
                  className="btn btn-primary"
                >
                  Live Preview
                </a>
                <a
                  href="https://github.com/Mussratshaheen/calculator"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        
        
          <div className="card text-center">
            <div className="overflow">
              <img src={img2} className="card-img-top" alt="image2"style={{ width: "30rem", height: "27rem" }} />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Markdown Previewer</h4>
              <p className="card-text text-secondary">
              Markdown uses a simple formatting syntax to accomplish the same thing that HTML does, but it is simpler than HTML.I create this using html,css and javascript.
              </p>
              <div className="button">
                <a
                  href="https://mussratshaheen.github.io/mark-down-previewer/"
                  className="btn btn-primary"
                >
                  Live Preview
                </a>
                <a
                  href="https://github.com/Mussratshaheen/mark-down-previewer"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>


       

        
          <div className="card text-center">
            <div className="overflow">
              <img src={img5} className="card-img-top" alt="image5" style={{ width: "30rem", height: "27rem" }}/>
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">Admin Dashboard</h4>
              <p className="card-text text-secondary">
              I build this project using html,css and javascript and it was responsive and fast
application.

              </p>
              <div className="button">
                <a
                  href=" https://mussratshaheen.github.io/Admin-Dashboard/"
                  className="btn btn-primary"
                >
                  Live Preview
                </a>
                <a
                  href="https://github.com/Mussratshaheen/Admin-Dashboard"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>


        
























      </div>
    </div>
  );
};

export default Card;
