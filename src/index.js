import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App.js';
import About from "./components/About.js";
import recipeLogo from "./images/recipeLogo.png";

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar" role="navigation">
            <div className="navbar-brand">
            <Link to="/About">
              <img src={recipeLogo} alt="" className="navbar-image"/>
            </Link>
            </div>
            <div className="navbar-menu">
              <Link to="/About/" className="navbar-item">
                About
              </Link>
              <Link to="/" className="navbar-item">
                Home
              </Link>
            </div>
          </nav>
          <Route path="/About/" component={About} />
          <Route exact path="/" component={App} />
        </div>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById('root'));
