import React from 'react';
import { Container, Image,Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Anu from '../../images/anu.jpg'
const About = () => {
    return (
        <div id='about'>
           <h3 className="text-center  mt-5" style={{fontSize:"30px",fontWeight:'bold', fontFamily:'cursive'}}>Little Stroy <span style={{fontSize:"30px",fontWeight:'bold',color:'#002db3'}}>About Me</span></h3>

         <Container style={{marginTop:''}}>
         <div className="row mt-5">
               <div className="col-md-6">

                   <Image style={{width:'100%',height:'500px'}} src={Anu} alt="" />

               </div>
               <div style={{marginTop:'100px'}} className="col-md-5">
                <Fade right>
                <h4>A Story Of Anamika Sharma</h4>
                <h3>Who I am</h3>
                   <p className="mt-5 text-white">  Hello, I am a professional junior full-stack developer(MERN). I have almost 1 years of experience in this sectionI am an enthusiastic Frontend developer with knowing some framework for the frontend and the backend. I know Basic PHP and MySQL but basically a MERN developer.</p> <br/>

                   <p className="text-white">
                  My professional skills are HTML, CSS, Javascript, Bootstrap, Material UI, Tailwind CSS, React JS, Node JS, Express JS, MongoDB, Firebase & PHP,Mysql. I complete 10+ project .

I have completed a long training form Programming-hero Institute. I am excited to be at the deployment phase of my new career as a web developer. Currently, I am looking for a full-time job or internship.
                   </p>

                   <div className="contact-btn d-flex">

                   <a href="https://www.linkedin.com/in/anamika-sharma-34b1b4227/" target='blank'> <Button style={{margin:'5px'}} variant="outline-secondary"><i class="fab fa-linkedin"></i></Button></a>   

                   <a href="https://github.com/anamikasharma15" target='blank'> <Button style={{margin:'5px'}} variant="outline-secondary"><i class="fab fa-github"></i></Button></a>

                   <a href="anamikaanuctg@gmail.com" target='blank'> <Button style={{margin:'5px'}} variant="outline-secondary"><i class="fab fa-email-f"></i></Button></a> 

                   <Button style={{margin:'5px'}} variant="outline-secondary"><i class="fab fa-twitter"></i></Button>
                   </div>
                </Fade>
                   
               </div>
           </div>
         </Container>

         
           
        </div>
    );
};

export default About;