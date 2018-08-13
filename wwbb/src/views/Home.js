import React from 'react';
import Form from '../components/form';

export default class Home extends React.Component {

  render() {
    return (
      <div id="home" className="main-content">

        <div className="home-content-1">
          <h1>Singapore's Best Entertainment Dance Crew</h1>
        </div>

        <div className="home-content-2">
          <h2>We are a dance crew that consist of people from all over the neighbourhood of singapore!</h2>
          <p>Over 100+ performance and counting!</p>
        </div>

        <div className="home-content-2">
          <Form />
        </div>

      </div>
    );
  }
}