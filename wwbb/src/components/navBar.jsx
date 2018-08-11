import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Media from '../Media';
import Contact from '../Contact';

export default class NavBar extends React.Component {

  render() {
    return (
      <Router>
        <div>
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