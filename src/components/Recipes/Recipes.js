import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import Error from './Error';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://api.edamam.com/search?q=${this.props.recipes.type}&app_id=2d4a708f&app_key=5519d3b7c9291019417c80cffaf82880&from=0&to=50`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          recipes: data.hits
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.recipes.map((item) => (
        <RecipeCard key={item.recipe.image} item={item} />
      ));
    } else {
      return <Error />
    }
  }

  render() {
    return (
      <div className="column">
        <div className="columns">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default Recipes;
