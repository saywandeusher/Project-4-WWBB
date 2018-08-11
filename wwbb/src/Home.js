import React from 'react';
import LoginForm from './components/loginform';

export default class Home extends React.Component {

  render() {
    return (
      <div className="main-content">

        <div className="main-content-1">
          <h1>Singapore's Best Entertainment Dance Crew</h1>
        </div>

        <div className="main-content-2">
          <h2>We are a dance crew that consist of people from all over the neighbourhood.</h2>
          <h3>Over 100+ performance and counting!</h3>
        </div>

        <div className="main-content-2">
          <h2>Want a performance from us?</h2>
          <h3>contact us now!</h3>
          <LoginForm />
        </div>

      </div>
    );
  }
}