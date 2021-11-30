import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Service.css'

const Service = () => {
    return (
        <div id='service' style={{paddingTop:'40px'}}>
            <h3 className="text-center mt-5" style={{fontSize:"30px",fontWeight:'bold',marginTop:'50px', fontFamily:'cursive'}}>My Creative <span style={{fontSize:"30px",fontWeight:'bold',color:'#002db3'}}>Service</span></h3>

            <Container>
                <div className="row" style={{marginTop:'60px'}}>

                <Fade bottom>
                <div className="col-md-4">
                    <div class="card text-center">
                    <div class="card-body">
                    <i style={{fontSize:'45px',color:'yellowgreen'}} class="fas fa-code"></i>
                    <h5 class="card-title fw-bold mt-3">WEB DEVELOPMENT</h5>
                    <p class="card-text mt-3">Qualified web design and attractive effects which catches visitor’s Eye.</p>
                    <p className="fw-bold">Read More <i className="fas fa-arrow-right"></i></p>     
                    </div>
                    </div>
                    </div>
                </Fade>
                   
                <Fade bottom>
                <div className="col-md-4">
                    <div class="card text-center">
                    <div class="card-body">
                    <i style={{fontSize:'45px',color:'yellowgreen'}} class="fas fa-desktop"></i>
                    <h5 class="card-title fw-bold mt-3">WEB DESIGN</h5>
                    <p class="card-text mt-3">I can build a website more user friendly and more.bootstrap and custom Media Query.</p>
                    <p className="fw-bold">Read More <i className="fas fa-arrow-right"></i></p>       
                    </div>
                    </div>
                    </div>
                </Fade>

                <Fade bottom>
                <div className="col-md-4">
                    <div class="card text-center">
                    <div class="card-body">
                    <i style={{fontSize:'45px',color:'yellowgreen'}} class="fab fa-html5"></i>
                    <h5 class="card-title fw-bold mt-3">FIGMA TO HTML</h5>
                    <p class="card-text mt-3">I can covert psd to html with more css framework,like Latest Bootstrap,Tailwind.</p>
                    <p className="fw-bold">Read More <i className="fas fa-arrow-right"></i></p>     
                    </div>
                    </div>
                    </div>
                </Fade>
               
                <Fade bottom>
                <div className="col-md-4 mt-3">
                    <div class="card text-center">
                    <div class="card-body">
                    <i style={{fontSize:'45px',color:'yellowgreen'}} class="fas fa-tools"></i>
                    <h5 class="card-title fw-bold mt-3">Bugs Fixing</h5>
                    <p class="card-text mt-3">I can covert psd to html with more css framework,like Latest Bootstrap,Tailwind.</p>
                    <p className="fw-bold">Read More <i className="fas fa-arrow-right"></i></p>     
                    </div>
                    </div>
                    </div>
                </Fade>

                <Fade bottom>
                <div className="col-md-4 mt-3">
                    <div class="card text-center">
                    <div class="card-body">
                    <i style={{fontSize:'45px',color:'yellowgreen'}} class="fas fa-chalkboard"></i>
                    <h5 class="card-title fw-bold mt-3">Responsive Design</h5>
                    <p class="card-text mt-3">I can design a responsive website with clean and optimized code.</p>
                    <p className="fw-bold">Read More <i className="fas fa-arrow-right"></i></p>     
                    </div>
                    </div>
                    </div>
                </Fade>

                    
                <Fade bottom>
                <div className="col-md-4 mt-3">
                    <div class="card text-center">
                    <div class="card-body">
                    <i style={{fontSize:'45px',color:'yellowgreen'}} class="fas fa-database"></i>
                    <h5 class="card-title fw-bold mt-3">API Development</h5>
                    <p class="card-text mt-3">Build more secure and fast API with node js and express js for development backend</p>
                    <p className="fw-bold">Read More <i className="fas fa-arrow-right"></i></p>     
                    </div>
                    </div>
                    </div>
                </Fade>

                   

                    
                </div>
            </Container>
        </div>
    );
};

export default Service;