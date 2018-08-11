import React from 'react'
import LoginForm from '../components/loginform';

export default class Home extends React.Component {

  render() {
    return (
      <div id="Home" className="main-content">

        <div className="main-content-1">
          <h1>Singapore's Best Entertainment Dance Crew</h1>
        </div>

        <div className="main-content-2">
          <h2>We are a dance crew that consist of people from all over the neighbourhood of singapore!</h2>
          <p>Over 100+ performance and counting!</p>
        </div>

        <div className="main-content-2">
          <h2>Want a performance from us?</h2>
          <p>Contact us now!</p>
          <LoginForm />
        </div>

      </div>
    );
  }
}