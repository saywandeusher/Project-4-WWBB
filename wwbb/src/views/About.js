import React from 'react';
import Members from '../components/members';

export default class About extends React.Component {

  render() {
    return (
      <div id="About" className= "about-content">
        
        <div className="about-content-1">
          <h1>About Us</h1>
          <h3>check out our memebers.</h3>
        </div>
        
        <div className="about-content-2">
          <Members />
        </div>

      </div>
    );
  }
}