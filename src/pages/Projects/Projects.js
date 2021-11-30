import React from 'react';
import { Container, Image,Button} from 'react-bootstrap';
import './Projects.css'
import project1 from '../../images/car.jpg'
import project2 from '../../images/music.jpeg'
import project3 from '../../images/dental.jpg'
import project4 from '../../images/travel.GIF'
import project5 from '../../images/e-commerce.GIF'
import project6 from '../../images/programmer1.GIF'


const Project = () => {
    return (
        <div>
           <h3 id='project' className="text-center mt-5" style={{fontSize:"30px",fontWeight:'bold', fontFamily:'cursive'}}>My Projects <span style={{fontSize:"30px",fontWeight:'bold',color:'#002db3'}}>Work</span></h3>

           <Container>
           <div className="row img-container text-center mx-5 my-5">
               
               <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
               <Image className="first" style={{width:'100%',height:'450px'}} src={project1} alt=""/>   
                <div className="middle">    
                <a href="https://ana-car-gerez.web.app/" target='blank'><Button className='text'> Live View</Button></a>
                <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

                </div>
               </div>


               <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
               <Image className="first" style={{width:'100%',height:'450px'}} src={project2} alt=""/>
                <div className="middle">    
                <a href="https://melody-music-school.netlify.app/" target='blank'><Button className='text'> Live View</Button></a>
                <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

                </div>
               </div>


               <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
               <Image className="first" style={{width:'100%',height:'450px'}} src={project3} alt=""/>
                <div className="middle">    
                <a href="https://donto-dental-clinic.web.app/" target='blank'><Button className='text'> Live View</Button></a>
                <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

                </div>
               </div>


                <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
               <Image className="first" style={{width:'100%',height:'450px',marginTop:'15px'}} src={project4} alt=""/>
                <div className="middle">    
                <a href="https://andaman-travel-agency.web.app/" target='blank'><Button className='text'> Live View</Button></a>
                <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

                </div>
               </div> 

 
               <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
               <Image className="first" style={{width:'100%',height:'450px'}} src={project5} alt=""/>
                <div className="middle">    
                <a href="https://e-commerce-stores-house.netlify.app/" target='blank'><Button className='text'> Live View</Button></a>
                <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

                </div>
               </div> 


                <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
               <Image className="first" style={{width:'100%',height:'450px'}} src={project6} alt=""/>
                <div className="middle">    
                <a href="https://musing-nobel-f53ea9.netlify.app/" target='blank'><Button className='text'> Live View</Button></a>
                <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

                </div>
               </div> 



           </div>
           </Container>

        </div>
    );
};

export default Project;