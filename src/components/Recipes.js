import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios"
import RecipeCard from './RecipeCard';
import App from './App.js';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const recipeList = this.props.recipes.map((r, i) => (
      <RecipeCard
        key={r.recipe.uri}
        link={r.recipe.url}
        name={r.recipe.label}
        image={r.recipe.image}
        calories={r.recipe.calories}
        currentRecipe={this.props.recipes[i]}
      />
    ));
    return (
      <div>
        <div className="columns is-multiline is-centered">{recipeList}</div>
      </div>
    );
  }
}
export default Recipes;
