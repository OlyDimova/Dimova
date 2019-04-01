import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";

import './App.css';
import HomeSPA from './SPAPages/HomeSPA/HomeSPA';
import ReactJS from './SPAPages/ReactJS/ReactJS';





class App extends Component {
  render() {
    return (
      <div className="App">

            <BrowserRouter>
              <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <a href="http://localhost:63342/untitled3/my-app/RWD_project/Home/HomeMPA.html">
                    <li>back to Home</li>
                  </a>
                  <NavLink to="/">
                    <li>Home SPA</li>
                  </NavLink>
                  <NavLink to="/ReactJS">
                    <li>ReactJS</li>
                  </NavLink>
                </ul>
              </div>
              </nav>

              <div className="gridMenu">
                <div className="menuItem Left">
                  <a href="http://localhost:63342/untitled3/my-app/RWD_project/Home/HomeMPA.html">back to Home</a>
                </div>
                <div className="menuItem">
                  <NavLink to="/">Home SPA</NavLink>
                </div>
                <div className="menuItem">
                  <NavLink to="/ReactJS">ReactJs</NavLink>
                </div>
              </div>




          <Route exact path="/" component={HomeSPA}/>
          <Route path="/ReactJS" component={ReactJS}/>



            </BrowserRouter>

      </div>
    );
  }
}



export default App;
