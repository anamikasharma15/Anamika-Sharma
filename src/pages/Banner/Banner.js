import React from 'react';
import Fade from 'react-reveal/Fade';
import './Banner.css'
import Typical from 'react-typical'


const Banner = () => {
    return (
        <div className="banner">
            

    <div className="parent mb-5">

<div className="d-flex text-center justify-content-center align-items-center h-100">
<div>
        <Fade top>
        <h3 style={{fontFamily:'cursive',marginTop:'250px'}} className="text-white">“Hello”</h3> <br />
        </Fade>

         
         <h1 className='text-white'>I'm Anamika Sharma</h1>
      

  
    <h2 style={{color:'white'}}><Typical
        steps={['Junior Mern-Stack Developer', 1000, '', 800,'Web Designer', 1000]}
        loop={Infinity}
        wrapper="p"
      /></h2>
 




<div style={{marginTop:'50px',marginBottom:'100px'}}>

       <Fade bottom>
       <a href="#contact"><button style={{color:'black',padding:'8px',margin:'10px',width:'120px',backgroundColor:'#0FDCDC'}} className="btn  m-3 fw-bold" >CONTACT</button></a>
       
       <a href="https://drive.google.com/file/d/1qg4lloMynLaJR2jy5epd7poGhqCCZFO_/view?usp=sharing" target='blank'><button style={{color:'black',padding:'8px',margin:'10px',width:'120px',backgroundColor:'#0FDCDC'}} className="btn m-3 fw-bold">GET CV</button></a>


        </Fade>




</div>
</div>
</div>

</div>
            
        </div>
    );
};

export default Banner;