import { useState } from 'react'
/*import {Link} from "react-router-dom";*/
import {Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { Link as ScrollLink } from 'react-scroll/modules';
import * as Scroll from "react-scroll";
import { ReactComponent as Hamburger } from '../../assets/Home/menu.svg';
import { ReactComponent as Brand } from '../../assets/Home/logoipsum-294.svg';
import './Navbar.css';

const Navbar = () => {
  
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true
    });
  };

  
  
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <header id="navigation">
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
          {location !== "test" ? (
            <>
            <li>
            {" "}
              <ScrollLink to="home" spy={true} smooth={true} offset={-75} duration={500}>Home</ScrollLink>
            </li>
            
            <li>
              <ScrollLink to="project" spy={true} smooth={true} offset={-75} duration={500}>Project</ScrollLink>
            </li>
            <li>
            <ScrollLink  to="about" spy={true} smooth={true} offset={-75} duration={500}>About</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-75} duration={500}>Contact</ScrollLink>
            </li>
            
            </>
          ) : (
            <>
              <li>
                {" "}
                <button onClick={() => goToPageAndScroll("home")}>Home</button>
              </li>
              
              <li>
                <button onClick={() => goToPageAndScroll("project")}>Project</button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("about")}>About</button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("contact")}>Contact</button>
              </li>
              <li>
                <RouterLink to="https://resume.io/r/3Ki2zbSTX" >Resume</RouterLink>
              </li>
            </>
          )}
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar