import React from 'react';
import PText from '../../portfolioContainer/About me/PText';
import Button from '../../portfolioContainer/About me/Button';
import AboutImg from '../../assets/Home/photo.jpg';
import AboutInfoItem from '../../portfolioContainer/About me/AboutInfoItem';
import styled from "styled-components";
import img6 from "../../assets/Home/css.jpg";
import img7 from "../../assets/Home/html.png";
import img8 from "../../assets/Home/react.png";
import img9 from "../../assets/Home/js2.jpg";
import img10 from "../../assets/Home/node.jpg";
import img11 from "../../assets/Home/mongo.jpg";
import img12 from "../../assets/Home/php.png";
import img13 from "../../assets/Home/webflow1.png";
import img14 from "../../assets/Home/photoshop.png";
import Typical from "react-typical";


const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;
  background: radial-gradient(#e5e5e5, #ffff,#e5e5e5);
  marginTop:30rem;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color:var(--gray-2);
    span {
      
      padding: 0.5rem;
      border-radius: 8px;
      color:var(--gray-2);
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color:var(--gray-2);
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
      
      color:var(--gray-2);
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-2);
    }
  }
  .about__info__items {
    margin-top: 1rem;
  }
  .about__info__item {
    margin-bottom: 1rem;
  }
  .about__info__heading {
    text-align:center;
    font-size: 3.6rem;
    text-transform: uppercase;
    margin-bottom: 15rem;
    color:var(--gray-2);
    
    
  }
  
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .container{
      padding: 0 3.2rem;
      min-width: fit-content;
      
   }
}
    .top-section {
      display:flex;
      flex-direction: row;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }

    @media only screen and (max-width: 468px) {
    .top-section {
      display:flex;
      flex-direction: column-reverse;
      gap: 5rem;
    }
    
    }

  .about-img-top{
    border:2px solid gray;
    
    height:100px;
  }
  .about-img-top:hover{ transform: scale(1.1);
   transition: transform 0.5s ease-out;
   
}




`;

const About= () => {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
        <h2  style={{fontSize: "4rem", marginTop:"1rem"}}>About me</h2>
    <hr style={{ marginBottom:"4rem"}}/>
   <div className="para">
   
   
    <p>
            <h3>
            {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    " Here is my background",
                    1000,
                    "Please read this to Know about me",
                    1000, ]}
                /> </h3>
            
                  
                </p>
    </div>
            <div className="top-section">
            <div className="left">
              <p className="about__subheading"
              style={{fontSize:"2rem",fontFamily:"cursive",color:"var(--dark-orange"}}>
                Hi, I am <span>Mussrat Shaheen</span>
              </p>
              <h2 className="about__heading">A freelance Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Attock, Pakistan. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="Resume" btnLink="https://resume.io/r/3Ki2zbST" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={[' Govt. High School, Chhab,Attock']}/>
                
              
              <AboutInfoItem
                title="Collage"
                items={['f7/2 College Islamabad']}
              />
              <AboutInfoItem
                title="University"
                items={[' Virtual University of Pakistan']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[<img src={img7} className="about-img-top" alt="..." />,<img src={img6} className="about-img-top" alt="..."/>,<img src={img9} className="about-img-top" alt="..."/>,<img src={img8} className="about-img-top" alt="..."/>]}
/>
<br/><br/><br/>

<AboutInfoItem
                title="BackEnd"
                items={[<img src={img10} className="about-img-top" alt="..."/>, <img src={img11} className="about-img-top" alt="..."/>,<img src={img12}  className="about-img-top" alt="..."/>]}
              />
              <br/><br/><br/>
              <AboutInfoItem
                title="Design"
                items={[<img src={img14} className="about-img-top" alt="..."/>, <img src={img13} className="about-img-top" alt="..."/>]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2019-2020"
                items={['Practising at FreecodeCamp and The Odin Project']}
              />
              <AboutInfoItem
                title="2021-2022"
                items={['Front end developer at Freelancing ']}
              />
              <AboutInfoItem
                title="2023-"
                items={['Freelance web Developer']}
              />
              
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Certificates</h1>

              <AboutInfoItem
                title="Freee Code Camp"
                items={['']}
              />
              <PText>
              <h3>
            {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    " Responsive Web Design",
                    2000,
                    "Front End Development Libraries",
                    2000, 
                    " JS Algorithms & DataStructures",
                    2000,]}
                /> </h3>
            

              Verify It: 
              <Button btnText="View Certificates" btnLink="https://www.freecodecamp.org/certification/Mussratshaheen/responsive-web-design" target="_blank" />
              </PText>
              </div>
          </div>
        </div>
        
      </AboutPageStyles>
      
    </>
  );
}
export default About;