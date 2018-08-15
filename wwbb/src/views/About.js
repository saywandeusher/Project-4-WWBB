import React from 'react';
import Members from '../components/members';
import '../styles/about.css'

export default class About extends React.Component {

  render() {
    return (
      <div id="about" className= "main-content">
        
        <div className="about-content-1">
          <div className="aboutContent1">
            <h1>About Us</h1>
            <h3>check out our memebers.</h3>
          </div>
        </div>
        
        <div className="about-content-2">
          <Members />
        </div>

      </div>
    );
  }
}