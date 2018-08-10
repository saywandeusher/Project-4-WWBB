import React from  'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/loginform'


class App extends React.Component{
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        hello!! this works! {this.props.greeting}
        <br />
        <LoginForm />
      </div>
    )
  }
}

ReactDOM.render(
  <App greeting="AT LONG LAST." />,
  document.getElementById('app')
)

module.hot.accept();