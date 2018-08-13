import React from  'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Media from './views/Media';
import Contact from './views/Contact';

class App extends React.Component{
  constructor() {
    super();
    this.state = {};
  }


  render() {
    return (
      <Router>
        <div className="container">
          <div className="nav-container">

            <a href="/" className="brand-logo">WWBB</a>

              <ul id="slide-out" className="sidenav">
                <li>
                  <Link className="sidenav-close" to="/">Home</Link>
                </li>
                <li>
                  <Link className="sidenav-close" to="/about">About</Link>
                </li>
                <li>
                  <Link className="sidenav-close" to="/media">Media</Link>
                </li>
                <li>
                  <Link className="sidenav-close" to="/contact">Contact</Link>
                </li>
              </ul>
              <a href="#" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a>

          </div>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/media" component={Media} />
            <Route path="/contact" component={Contact} />

            <hr />

            <div className="footer">
              <p>This is the footer lol..</p>
            </div>
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