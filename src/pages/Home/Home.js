import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
 import MySkills from '../MySkills/MySkills';
import Footer from '../Footer/Footer';
// import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
             <About></About>
            {/* <Service></Service> */}
             <MySkills></MySkills>
             <Projects></Projects>
             <Footer></Footer> 
        </div>
    );
};

export default Home;