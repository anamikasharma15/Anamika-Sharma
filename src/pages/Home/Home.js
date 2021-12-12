import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
 import MySkills from '../MySkills/MySkills';
import Footer from '../Footer/Footer';
// import Particles from 'react-particles-js';
import Service from '../Service/Service';
import Blogs from '../../Blogs/Blogs';
import ContactMe from '../ContactMe/ContactMe';
// import Service from '../Service/Service';

const Home = () => {
    return (
        <div className="home"  style={{backgroundColor:'rgb(152, 152, 158)'}}>
            {/* <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} /> */}
            <Header></Header>
            <Banner></Banner>
             <About></About>
             <Service></Service>
             <MySkills></MySkills>
             <Projects></Projects>
			 <Blogs></Blogs> 
			<ContactMe></ContactMe>
             <Footer></Footer>
			 
        </div>
    );
};

export default Home;