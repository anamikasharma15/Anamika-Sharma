import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import "./ProjectDetails.css";
const ProjectDetails = () => {

  const [projects, setProjects] = useState([]);
  const { projectId } = useParams();
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const matchedProject = projects.find((projects) => projects.id == projectId);
  console.log(matchedProject);
  window.scroll(0, 0);
  return (
    <div className="main-project-wrapper">
      <Row xs={1} md={2} className="inner-Container gy-5">
        <Col>
          <h1 className="project-name">
            {" "}
            <strong>Project:</strong> {matchedProject?.name}
          </h1>
          <h5 className="mt-3 tech">
            {" "}
            <strong>Technology Used:</strong> {matchedProject?.tech}{" "}
          </h5>
          <p className="project-desc">
            {" "}
            <strong>Overview:</strong> {matchedProject?.description}
          </p>

          <div className="d-md-flex">
            <a
              className="text-decoration-none d-block github"
              target="_blank"
              href={`${matchedProject?.github}`}
            >
              {" "}
              Github Client Code
            </a>
            {matchedProject?.githubServer && (
              <a
                className="text-decoration-none ms-3 d-block"
                target="_blank"
                href={`${matchedProject?.githubServer}`}
              >
                {" "}
                Github Server Code
              </a>
            )}
          </div>
        </Col>
        <Col>
          <img className="project-image" src={matchedProject?.image} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetails;

// --------------------------------------------------------
// import React, { useEffect, useState } from 'react';
// import { Card, Container } from 'react-bootstrap';
// import { useParams } from 'react-router';

// const Details = () => {
//     const {id} = useParams()
//     const [projects,setProjects] = useState([])

//     useEffect(()=>{
//         fetch('/projects.json')
//         .then(res => res.json())
//         .then(data => {
//             const selected = data.find(select => select?.id === +id)
//             setProjects(selected)
//         })
//     },[id])

//     return (
//         <div className="my-5 text-light">
//             <Container>
//             <h2 className="text-end" style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}}>#Project Details</h2>
//                 <div className="row text-light">
//                     <div className="col-12 col-md-6 text-start">
//                         <h3>{projects?.name}</h3>
//                         <p>{projects?.title}</p>
//                         <ul>
//                             {
//                                 projects?.bullet?.map(a => <li>{a}</li>)
//                             }
//                         </ul>
//                     </div>
//                     <div className="col-12 col-md-6">
//                     <div  style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'10px'}}>
//                     <Card.Img variant="top" src={projects?.img} />
//                     <Card.Img variant="top" src={projects?.img1} />
//                     <Card.Img variant="top" src={projects?.img2} />
//                     <Card.Img variant="top" src={projects?.img3} />
//                     </div>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default Details;

// ---------------------------------------
// import React from 'react';
// // import './Projects.css'
// import Project from '../../pages/Projects/Projects';

// const projectsData = [
//   {
//     "id": 1,
//     "img": "https://i.ibb.co/zPV19kc/aments-Project.png",
//     "name": "❖ Aments - Best Car Accessories Shop",
//     "date": "Nov 2021 - Nov 2021",
//     "website": "https://aments-9b6e4.web.app/",
//     "frontendGit": "https://github.com/hellorafiul/Aments-Car-Accessories-Client",
//     "backendGit": "https://github.com/hellorafiul/Aments-Car-Accessories-server",
//     "linkedin": "https://www.linkedin.com/in/hellorafiul/",
//     "des": [
//       "➣ A responsive, fully-functional niche website",
//       "➣ Allowing customers to create an account, browse products, buy products & write reviews.",
//       "➣ Admins have the ability to add new products, remove existing products, remove user products, update shipping status, and create new admin accounts.",
//       "➣ Reviews are dynamic."
//     ],
//     "Technology": [
//       "#MUI",
//       "#JS",
//       "#React",
//       "#Aso",
//       "#React router",
//       "#Heroku",
//       "#Firebase",
//       "#Node JS",
//       "#Node Express",
//       "#MongoDB",
//     ]
//   },
//   {
//     "id": 2,
//     "img": "https://i.ibb.co/XJPf5xP/yatra.png",
//     "name": "❖ Yatra - Best Travel Agency",
//     "date": "Nov 2021 - Nov 2021",
//     "website": "https://yatra-62295.web.app/",
//     "frontendGit": "https://github.com/hellorafiul/Yatra-Travel-Agency-Client",
//     "backendGit": "https://github.com/hellorafiul/Yatra-Travel-Agency-Server",
//     "linkedin": "https://www.linkedin.com/in/hellorafiul/",
//     "des": [
//       "➣ Travel agency website with dynamic functions and responsive design.",
//       "➣ Allows user to create an account, book packages, add custom packages, and delete them.",
//       "➣ Google firebase authentication has been added.",
//       "➣ Reviews are dynamic."
//     ],
//     "Technology": [
//       "#BootStrap",
//       "#JS",
//       "#React",
//       "#React router",
//       "#Heroku",
//       "#Firebase",
//       "#Node JS",
//       "#Node Express",
//       "#MongoDB",
//     ]
//   },
//   {
//     "id": 3,
//     "img": "https://i.ibb.co/DffF163/honulare.png",
//     "name": "❖ HounLare - Medical & Health Care Services",
//     "date": "Oct 2021 - Oct 2021",
//     "website": "https://hounlare.web.app/",
//     "frontendGit": "https://github.com/hellorafiul/HounLare",
//     "linkedin": "https://www.linkedin.com/in/hellorafiul/",
//     "des": [
//       "➣ A fully functional dynamic responsive website",
//       "➣ User can see his name and profile picture in the header after signin with Google.",
//       "➣ Navigate different pages is possible through navbar without reloading.",
//     ],
//     "Technology": [
//       "#Html5",
//       "#Css3",
//       "#BootStrap",
//       "#JS",
//       "#React",
//       "#React router",
//       "#Firebase"
//     ]
//   },
//   {
//     "id": 4,
//     "img": "https://i.ibb.co/3mbq7xd/hondaCBR.png",
//     "name": "❖ Honda CBR - Best Bike Accessories Shop",
//     "date": "July 2021 - July 2021",
//     "website": "https://honda-cbr-rafi.netlify.app/",
//     "frontendGit": "https://github.com/hellorafiul/honda-cbr",
//     "linkedin": "https://www.linkedin.com/in/hellorafiul/",
//     "des": [
//       "➣  This was my very first static responsive website focused on UI using HTML5, CSS3, Bootstrap and JavaScript",
//       "➣ Used fancy carousel & hosted on netlify",
//       "➣ Amzging UI exprience",
//     ],
//     "Technology": [
//       "#HTML5",
//       "#CSS3",
//       "#BootStrap",
//       "#JavaScript",
//     ]
//   }
// ]
// const Projects = () => {
//   return (
//     <div id="projects">
//       <h2 className="text-start pb-5 mb-5 container">My projects_</h2>
//       {projectsData.map((project) => <Project key={project.id} project={project}></Project>)}
//     </div>
//   );
// };

// export default Projects;