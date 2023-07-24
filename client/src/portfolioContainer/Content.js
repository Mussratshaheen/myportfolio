import Home from  "./Home/Home";
import Project from "./Projects/Project";
import About from "./About me/About";
import Contact from "./Contact me/Contact";


const Content = () => {
  return (
    <div id="mainContent">
      <Home />
      <Project/>
      <About/>
      <Contact />
    </div>
  );
};
export default Content;
