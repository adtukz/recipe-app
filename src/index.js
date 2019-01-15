import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import RecipeCard from "./recipeHome.js";
import NavBar from "./navbar.js";
import './index.css';

const urlEnd = '&app_id=2d4a708f&app_key=5519d3b7c9291019417c80cffaf82880&from=0&to=100';
const getUrl = 'https://api.edamam.com/search?q=';
let foodUrl = 'rice';

console.log(foodUrl);
class RecipeGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipes: []};
  }

  componentDidMount() {
  axios.get(getUrl + foodUrl + urlEnd)
    .then(response => {
      this.setState({recipes: response.data.hits});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const recipeList = this.state.recipes.map(r => <RecipeCard key={r.recipe.uri} name={r.recipe.label} image={r.recipe.image} calories={r.recipe.calories} yield={r.recipe.yield} link={r.recipe.url}/>);

    return (
      <div className="columns is-multiline contentDiv">
        {recipeList}
      </div>
    )
  }
}

ReactDOM.render(
  <React.Fragment>
    <div className="columns">
      <div className="column is-one-quarter">
        <NavBar />
      </div>
      <div className="column">
        <RecipeGrid />
      </div>
    </div>
  </React.Fragment>,
  document.getElementById("root")
);
