// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, } from "react-router-dom";

import Home from './pages/Home/Home';
import Blogs from './Blogs/Blogs';
// import Header from './pages/Header/Header';
// import Footer from './pages/Footer/Footer'
// import ParticleBack from './particleBack/particleBack';
// import Particles from 'react-particles-js';



function App() {
  return (
    <div className="App">
      {/* <ParticleBack/> */}

      {/* <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} /> */}

      <BrowserRouter>
      <Router>
	  {/* <Header></Header> */}
      <Route exact path="/">
            <Home></Home>
          </Route>
           <Route exact path="/home">
            <Home></Home>
          </Route>
           <Route exact path="/blogs">
            <Blogs></Blogs>
          </Route>
		  {/* <Footer></Footer> */}

         {/* <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
   */}
      
     
    </Router>
  </BrowserRouter>
     
     
    </div>
  );
}

export default App;
