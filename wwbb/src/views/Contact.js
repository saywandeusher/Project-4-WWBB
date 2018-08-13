import React from 'react';
import Form from '../components/form';

export default class Contact extends React.Component {

  render() {
    return (
      <div className="Contact">
        <h1>Contact us</h1>
        <h3>Looking for a performance?</h3>
        <Form />
      </div>
    );
  }
}