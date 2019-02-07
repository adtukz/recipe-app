import React from 'react';

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullRecipe: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if(!this.state.fullRecipe) {
      this.setState({
        fullRecipe: true
      });
    } else {
      this.setState({
        fullRecipe: false
      });
    }
  }

  render() {
    const currentRecipe = this.props.currentRecipe;
    if(!this.state.fullRecipe){
      return (
        <div className="column is-4">
          <div className="recipe">
            <span onClick={this.handleClick}>
            <div className="card-title titleStyle"> {currentRecipe.recipe.label} </div>
            <div className="card-image">
              <figure className="image is-4by3">
                <img alt='Profile'  className='imgStyle' src={currentRecipe.recipe.image}></img>
              </figure>
            </div>
            <div className="card-content currentRecipeContentStyle">
              <div className="media">
                <div className="media-content contStyle">
                  <p className="subtitle calStyle">Contains {(Math.round(currentRecipe.recipe.calories/currentRecipe.recipe.yield))} calories per serving.</p>
                  <p className="subtitle calStyle">Serves {currentRecipe.recipe.yield} people.</p>
                </div>
              </div>
            </div>
            </span>
          </div>
        </div>
      );
    } else if (this.state.fullRecipe) {
      return (
        <div className="column is-8 recipe">
          <div className="columns">

            <span onClick={this.handleClick}>

            <div className="column is-12 card-title titleStyle">
              <h2>{currentRecipe.recipe.label} </h2>
            </div>

            <div className="column is-12">
              <div className="card-content currentRecipeContentStyle">
                <div className="media">
                  <div className="media-content contStyle">
                      <h2> Ingredients: </h2>
                        <p className="subtitle calStyle">{currentRecipe.recipe.ingredientLines.map(txt => <p>{txt}</p>)}</p>
                      <h2> Diet Labels: </h2>
                      <p className="subtitle calStyle">{currentRecipe.recipe.dietLabels.map(txt => <p>{txt}</p>)}</p>
                      <h2> Health Labels: </h2>
                      <p className="subtitle calStyle">{currentRecipe.recipe.healthLabels.map(txt => <p>{txt}</p>)}</p>
                      <h2> Link to full recipe: </h2>
                      <a href={currentRecipe.recipe.uri}>{currentRecipe.recipe.url}</a>
                  </div>
                </div>
              </div>
            </div>
              </span>
          </div>
        </div>
      );
    }

  }
}

export default RecipeCard;
