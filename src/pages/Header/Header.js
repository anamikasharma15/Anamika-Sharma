import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div id='home'>
    <Navbar fixed='top' collapseOnSelect expand="lg" className=""  style={{backgroundColor:'#00004d'}}>
  <Container>
  <Navbar.Brand href="#home" style={{fontWeight:'bold',fontFamily:'cursive',color:'white'}} >Anamika Sharma<span style={{fontWeight:'bold', fontSize:'30px'}}>.</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">     
    </Nav>
    <Nav>
      <a style={{textDecoration:'none',fontSize:'18px',color:'white',marginRight:'20px',fontWeight:'bold'}}  href='#home'>Home</a>
      <a style={{textDecoration:'none',fontSize:'18px',color:'white',marginRight:'20px',fontWeight:'bold'}} href='#about'>About</a>
      <a style={{textDecoration:'none',fontSize:'18px',color:'white',marginRight:'20px',fontWeight:'bold'}} href='#service'>Service</a>
      <a style={{textDecoration:'none',fontSize:'18px',color:'white',marginRight:'20px',fontWeight:'bold'}} href='#project'>Project</a>
      <a href='#contact' style={{textDecoration:'none',fontSize:'18px',color:'white',marginRight:'20px',fontWeight:'bold'}}>Contact</a>
    </Nav>
    
    <a href="https://drive.google.com/file/d/1qg4lloMynLaJR2jy5epd7poGhqCCZFO_/view?usp=sharing" style={{color:'white'}} target='blank'><Button variant="outline-light">Find Resume</Button></a>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;