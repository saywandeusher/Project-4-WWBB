import React from 'react'


export default class About extends React.Component {

  render() {
    return (
      <div id="About" className= "main-content">
        
        <div className="main-content-1">
          <h1>About Us</h1>
        </div>
        
        <div className="main-content-2">
          <h3>Check out our members!</h3>
          <img src="./images/Augustine.jpg" width="50" height="100" />
        </div>

      </div>
    );
  }
}