import React, { Component } from 'react';
import './HomeSPA.css';



class HomeSPA extends Component {
  render() {
    return (
      <div className="HomeSPA">

          <div className="Blocks" id="BLO">
            <button className="Buts">
              <div className="buttonC">ReactJS</div>
              <div className="Follow">THIS'S</div>
            </button>
            <div className="infront">SINGLE</div>
          </div>


          <div to="/Skills" className="Blocks">
            <button className="Buts">
              <div className="buttonC">ReactJS</div>
              <div className="Follow">JUST</div>
            </button>
            <div className="infront">PAGE</div>
          </div>


          <div to="/Contact" className="Blocks">
            <button className="Buts">
              <div className="buttonC">ReactJS</div>
              <div className="Follow">DEMO</div>
            </button>
            <div className="infront">APPLICATION</div>
          </div>
      </div>
    );
  }
}



export default HomeSPA;
