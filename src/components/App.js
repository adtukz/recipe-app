import React, { Component } from 'react';
import './App.css';
import Recipes from './Recipes/Recipes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe1: {
        type: 'chicken'
      }
    };
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-one-fifth navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo center">My Feed</a>
            </div>
          </nav>
        </div>
          <Recipes recipes={this.state.recipe1} />
      </div>
    );
  }
}

export default App;
