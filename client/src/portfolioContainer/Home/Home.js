import React from 'react';
import Profile from './Profile';
import Footer from './Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div id="home" className="home" name="home">
        <div className='home-container'> 
        
            <Profile/>
            <Footer/>
            
        </div>
        </div>
    );
}

export default Home;
