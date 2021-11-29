import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
// import Project from '../../../Project/Project';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
 import MySkills from '../MySkills/MySkills';
// import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
             <About></About>
            {/* <Service></Service> */}
             <MySkills></MySkills>
            {/* <Project></Project> */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;