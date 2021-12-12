// import React from 'react';
// import { Container, Image,Button} from 'react-bootstrap';
// import './Projects.css'
// import project1 from '../../images/car.jpg'
// import project2 from '../../images/music.jpeg'
// import project3 from '../../images/dental.jpg'
// import project4 from '../../images/travel.GIF'
// import project5 from '../../images/e-commerce.GIF'
// import project6 from '../../images/programmer1.GIF'


// const Project = () => {
//     return (
//         <div>
//            <h3 id='project' className="text-center mt-5" style={{fontSize:"30px",fontWeight:'bold', fontFamily:'cursive'}}>My Projects <span style={{fontSize:"30px",fontWeight:'bold',color:'#002db3'}}>Work</span></h3>

//            <Container>
//            <div className="row img-container text-center mx-5 my-5">
               
//                <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
//                <Image className="first" style={{width:'100%',height:'450px'}} src={project1} alt=""/>   
//                 <div className="middle">    
//                 <a href="https://ana-car-gerez.web.app/" target='blank'><Button className='text'> Live View</Button></a>
//                 <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

//                 </div>
//                </div>


//                <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
//                <Image className="first" style={{width:'100%',height:'450px'}} src={project2} alt=""/>
//                 <div className="middle">    
//                 <a href="https://melody-music-school.netlify.app/" target='blank'><Button className='text'> Live View</Button></a>
//                 <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

//                 </div>
//                </div>


//                <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
//                <Image className="first" style={{width:'100%',height:'450px'}} src={project3} alt=""/>
//                 <div className="middle">    
//                 <a href="https://donto-dental-clinic.web.app/" target='blank'><Button className='text'> Live View</Button></a>
//                 <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

//                 </div>
//                </div>


//                 <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
//                <Image className="first" style={{width:'100%',height:'450px',marginTop:'15px'}} src={project4} alt=""/>
//                 <div className="middle">    
//                 <a href="https://andaman-travel-agency.web.app/" target='blank'><Button className='text'> Live View</Button></a>
//                 <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

//                 </div>
//                </div> 

 
//                <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
//                <Image className="first" style={{width:'100%',height:'450px'}} src={project5} alt=""/>
//                 <div className="middle">    
//                 <a href="https://e-commerce-stores-house.netlify.app/" target='blank'><Button className='text'> Live View</Button></a>
//                 <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

//                 </div>
//                </div> 


//                 <div style={{position:'relative',overflow:'hidden'}} className=" live-buttton col-md-4 ">              
//                <Image className="first" style={{width:'100%',height:'450px'}} src={project6} alt=""/>
//                 <div className="middle">    
//                 <a href="https://musing-nobel-f53ea9.netlify.app/" target='blank'><Button className='text'> Live View</Button></a>
//                 <a href="/#" target='blank'><Button className='ms-2'>Project Details</Button></a>

//                 </div>
//                </div> 



//            </div>
//            </Container>

//         </div>
//     );
// };

// export default Project;

// ----------------------------------------------------

import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Projects.css";
import img1 from "../../images/car.jpg";
import img2 from "../../images/music.jpeg";
import img3 from "../../images/dental.jpg";
import img4 from "../../images/travel.GIF";
import { Link } from "react-router-dom";

const Projects = (props) => {
    // const {id, name,image, description} = props.projectDetails;
  return (
    <div style={{ marginTop: "100px", marginBottom: "130px" }}>
      <h1 className="text-center works">My Works</h1>
      <p className="text-center mb-4">
        Please check these out, so you can get a proper concept about my work. I
        hope they will be able to earn your trust upon me.
      </p>
      <Row xs={1} md={2} className=" project-row mx-auto gy-5">
        <Col className="project-col">
          {" "}
          <img src={img1} alt="" className=" project-img" />{" "}
          <div className="inner-img-div">
            <a
              className="text-decoration-none text-white"
              target="_blank"
              href="https://ana-car-gerez.web.app/"
            >
              View Live{" "}
            </a>
            <Link
              className="text-decoration-none text-white ms-3"
              to={`/projectDetails/${111}`}
            >
              Details{" "}
            </Link>
          </div>
        </Col>
        <Col className="project-col">
          {" "}
          <img src={img2} alt="" className=" project-img" />{" "}
          <div className="inner-img-div">
            <a
              className="text-decoration-none text-white"
              target="_blank"
              href="https://melody-music-school.netlify.app/"
            >
              View Live
            </a>
            <Link
              className="text-decoration-none text-white ms-3"
              to={`/projectDetails/${222}`}
            >
              Details{" "}
            </Link>
          </div>
        </Col>
        <Col className="project-col">
          {" "}
          <img src={img3} alt="" className=" project-img" />{" "}
          <div className="inner-img-div">
            <a
              className="text-decoration-none text-white"
              target="_blank"
              href="https://donto-dental-clinic.web.app/"
            >
              {" "}
              View Live
            </a>
            <Link
              className="text-decoration-none text-white ms-3"
              to={`/projectDetails/${333}`}
            >
              Details{" "}
            </Link>
          </div>
        </Col>
        <Col className="project-col">
          {" "}
          <img src={img4} alt="" className=" project-img" />{" "}
          <div className="inner-img-div">
            <a
              className="text-decoration-none text-white"
              target="_blank"
              href="https://andaman-travel-agency.web.app/"
            >
              {" "}
              View Live
            </a>
            <Link
              className="text-decoration-none text-white ms-3"
              to={`/projectDetails/${444}}`}
            >
              Details{" "}
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;

// ------------------------------lira---------------


// import React, { useEffect, useState } from 'react';
// import { Button, Card, Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Projects = () => {
//     const [projects,setProjects] = useState([])

//     useEffect(()=>{
//         fetch('./projects.json')
//         .then(res => res.json())
//         .then(data => setProjects(data))
//     },[])
//     return (
//         <div className="my-5">
//             <Container>
//             <h2 className="text-end" style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}}>#All Projects Here</h2>
//             <Row xs={1} md={3} className="g-4">
//                 {
//                     projects.map(project => <Col key={project?.id}>
//                         <Card>
//                           <Card.Img variant="top" src={project?.img} />
//                           <Card.Body>
//                             <Card.Title>{project?.name}</Card.Title>
//                             <Card.Text style={{textAlign:'justify'}}>
//                             {project?.description?.slice(0,120)} <Link>more...</Link>
//                             </Card.Text>
//                             <Link to={`/details/${project?.id}`}><Button className="me-3">Details</Button></Link>
//                             <Button className="me-3">Links</Button>
//                           </Card.Body>
//                         </Card>
//                       </Col>)
//                 }
//             </Row>
//             </Container>
//         </div>
//     );
// };
// export default Project;

// ------------------------------------------------

// import React from 'react';
// import './Projects.css'

// const Project = ({ project }) => {
//   return (
//     <div className="container">
//       <div className="row mb-5">
//         <div className="col-md-4 projectImg">
//           <img src={project.img} alt="" className="img-fluid pb-5" data-aos="zoom-in"
//             data-aos-duration="500" />
//         </div>
//         <div className="col-md-8 project-details" data-aos="fade-up"
//           data-aos-duration="500">
//           <h3 className="project-card__title mt-md-0 mt-sm-5">{project.name}</h3>
//           <p>{project.date}</p>
//           <ul className="my-item">{
//             project.des.map((item) => <li>{item}</li>)
//           }</ul>
//           <ul className="tags">{
//             project.Technology.map((item) => <li>{item}</li>)
//           }</ul>
//           <div className="project-link">
//             <a href={project?.website} target="_blank"><i className="fas fa-globe"></i> Live Site</a>
//             <a href={project?.frontendGit} target="_blank"><i className="fa fa-github"></i> Client Side</a>
//             {
//               project?.backendGit && <a href={project?.backendGit} target="_blank"><i className="fa fa-github"></i> Server Side</a>
//             }
//             <a href={project?.linkedin} target="_blank"><i className="fa fa-linkedin-square"></i> Linkedin</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;
