import React from 'react'
import LoginForm from './components/loginform'

export default class Contact extends React.Component {

  render() {
    return (
      <div className="Contact">
        <h1>Contact</h1>
        <LoginForm />
      </div>
    );
  }
}