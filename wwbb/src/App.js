import React from  'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
      <Router>
        <div className="container">
            <div className="nav-logo">
              <p>WWBB</p>
            </div>

            <div className="nav-bar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/media">Media</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/media" component={Media} />
            <Route path="/contact" component={Contact} />

        </div> 
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept();