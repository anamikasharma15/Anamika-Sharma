// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter,
//   Route
// } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, BrowserRouter, } from "react-router-dom";

import Home from './pages/Home/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Router>
      <Route exact path="/">
            <Home></Home>
          </Route>
           <Route exact path="/home">
            <Home></Home>
          </Route>
  
      
     {/*  <Route path="expenses" element={} />
      <Route path="invoices" element={} /> */}
    {/* </Routes> */}
    </Router>
  </BrowserRouter>
     
     
    </div>
  );
}

export default App;
