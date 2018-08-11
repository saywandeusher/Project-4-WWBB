import React from  'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/loginform'
import NavBar from './components/navBar';
import Home from './Home';
import About from './About';
import Media from './Media';
import Contact from './Contact';

class App extends React.Component{
  constructor() {
    super();
    this.state = {};
  }



  render() {
    return (
      <div className="container">
        <NavBar />
        {/* hello!! this works! {this.props.greeting} */}
      </div>
    )
  }
}

ReactDOM.render(
  <App greeting="AT LONG LAST" />,
  document.getElementById('app')
)

module.hot.accept();