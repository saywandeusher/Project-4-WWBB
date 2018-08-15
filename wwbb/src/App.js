import React from  'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import NavBar from './components/navbar';
import Home from './views/Home';
import About from './views/About';
import Media from './views/Media';
import Contact from './views/Contact';
import StickyFooter from './components/stickyfooter';


class App extends React.Component{
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      [
        <NavBar />,
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/media" component={Media} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>,
        <footer>
          <StickyFooter/>
        </footer>
      ]
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
  <Router>
  <App />
  </Router>
  </BrowserRouter>,
  document.getElementById('app')
)

module.hot.accept();