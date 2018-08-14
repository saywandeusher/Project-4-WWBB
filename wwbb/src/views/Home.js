import React from 'react';
import Form from '../components/form';
import '../styles/home.css'

export default class Home extends React.Component {

  render() {
    return (
      <div id="home" className="main-content">

          <div className="home-content-1">
            <h1>Singapore's Best Entertainment Dance Crew</h1>
          </div>

        <div className="home-content-2">
          <div className="parallex">
            <h3>We are a dance crew that consist of people from all over the neighbourhood of singapore!</h3>
            <br />
            <p>Over 100+ performance and counting!</p>
          </div>
        </div>

        <div className="home-content-3">
          <Form />
        </div>

      </div>
    );
  }
}