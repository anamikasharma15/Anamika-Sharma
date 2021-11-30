// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter,
//   Route
// } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, BrowserRouter, } from "react-router-dom";

import Home from './pages/Home/Home';
import Blogs from './Blogs/Blogs';
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
      <Route exact path="/">
            <Home></Home>
          </Route>
           <Route exact path="/home">
            <Home></Home>
          </Route>
           <Route exact path="/blogs">
            <Blogs></Blogs>
          </Route>

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
      
     {/*  <Route path="expenses" element={} />
      <Route path="invoices" element={} /> */}
    {/* </Routes> */}
    </Router>
  </BrowserRouter>
     
     
    </div>
  );
}

export default App;
