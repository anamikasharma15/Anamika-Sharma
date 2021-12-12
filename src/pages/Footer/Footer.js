// import React from 'react';
// import backbground2 from "../../images/background2.jpg";
// import emailjs from 'emailjs-com';
// import { Container, Form,Button } from 'react-bootstrap';

// const Footer = () => {
//     function sendEmail(e){
//         e.preventDefault();

//         emailjs.setFrom('service_ps4ld3j','template_3j1twxd',e.target,'user_SbrsWCZAJ3XhLU9dDdE9E').then(res=>{
//             console.log(res);
//         }).catch(err=> console.log(err));
//     }
//     return (
//         <div>
//             <Container>
//                 <div id="contact" style={{marginBottom:'60px'}} src= {backbground2}  className='row'>

//                  <div className="col-md-6">
//                  <h3 className="text-center mt-5" style={{fontSize:"25px",fontWeight:'bold', fontFamily:'cursive'}}>Contact <span style={{fontSize:"25px",fontWeight:'bold',color:'#002db3'}}>Information</span></h3>

//                  <div style={{marginTop:'35px'}}>
//                  <p style={{fontSize:'17px'}} className="fw-bold"><i class="fas fa-home"></i>Demra,Konapara,Dhaka,Bangladesh</p>
//                  <p style={{fontSize:'17px'}} className="fw-bold"><i class="far fa-envelope"></i> anamikaanuctg@gmail.com</p>
//                  <p style={{fontSize:'17px'}} className="fw-bold"><i class="fas fa-mobile-alt"></i> +880 1849223898</p>
//                  <p style={{fontSize:'17px'}} className="fw-bold"><i class="fab fa-github"></i> Github</p>
//                  <p style={{fontSize:'17px'}} className="fw-bold"><i class="fab fa-linkedin"></i> Linkdin</p>
//                  </div>
//                  </div>

//                  <div className="col-md-6">

//                  <h3 className="text-center mt-5" style={{fontSize:"20px",fontWeight:'bold', fontFamily:'cursive'}}>GET IN <span style={{fontSize:"20px",fontWeight:'bold',color:'#002db3'}}>TOUCH</span></h3>

//          {/* <form className="row" style={{margin:"25px 85px 75px 100px"}}  onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="Name" className="form-control"/>
//       <label>Email</label>
//       <input type="email" name="user_email" className="form-control" />
//       <label>Message</label>
//       <textarea name="message" />
//       <Button style={{width:'100%',marginBottom:'20px'}} variant="primary">SUBMIT</Button> */}
//       {/* <input type="submit" value="Send" className="form-control" /> */}
//     {/* </form> */}
                   
//             {/* <Form onSubmit={setEmail}>
//                 <Form.Group className="mb-3" >
//                     <Form.Label style={{fontWeight:'bold'}}> Name</Form.Label>
//                     <Form.Control name="Name" type="text" placeholder="Enter Name" />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                     <Form.Label style={{fontWeight:'bold'}}>Email</Form.Label>
//                     <Form.Control type="email" name="user_email" placeholder="Enter Email" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                     <Form.Label style={{fontWeight:'bold'}}>Message</Form.Label>
//                     <Form.Control name="message" as="textarea" rows={3} />
//                 </Form.Group>
//                 <Button style={{width:'100%',marginBottom:'20px'}} variant="primary">SUBMIT</Button>
//             </Form> */}

//                  </div>

//                 </div>
//             </Container>
//             <p className="text-center copyright">© Copyright 2021 || Designed By <span className="text-dark">Anamika Sharma</span> || All Rights Reserved</p>
//         </div>
//     );
// };

// export default Footer;

import React from 'react';
import './Footer.css';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { HashLink } from 'react-router-hash-link';

const Footer = () => {

    const resumeUrl = ''


    return (
        <div className="">
            <footer className="mt-5 bg-dark">
                <div className="footer-top ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="address">
                                    <h3 className="text-uppercase fw-bold text-white">Anamika Sharma</h3>
                                    <p className="mb-4 mt-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />Konapara, Jatrabari, Demra, Dhaka-1362, Bangladesh.
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhoneAlt} /> +8801849223898
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} />anamikaanuctg@gmail.com
                                    </p>

                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Search Me</h4>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/anamika-sharma-34b1b4227/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                    <li><a href="https://github.com/anamikasharma15" target="_blank" rel="noreferrer">GitHub</a></li>
                                    <li><a href="https://www.facebook.com/surovi.susmita" target="_blank" rel="noreferrer">Facebook</a></li>
                                </ul>

                            </div>

                            <div className="col-lg-3 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Site Map</h4>
                                <ul>
                                    <li>My Projects</li>
                                    <li><a href={resumeUrl} target="_blank" rel="noreferrer">Online Resume</a></li>
                                    <li>Blog</li>
                                    <li>About Me</li>
                                    <li>Contact Me</li>
                                </ul>

                            </div>

                            <div className="col-lg-4 col-sm-6 newsletter">
                                <h4 className="text-uppercase fw-bold">Social Links</h4>

                                <div className="social-links mt-3">
                                    <a href="https://www.linkedin.com/in/anamika-sharma-34b1b4227/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://github.com/anamikasharma15" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://www.facebook.com/surovi.susmita" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;