import React from 'react';

const RecipeCard = ({item}) => (
  <div className="column is-one-third">
    <div className="card">
      <div className="card-title titleStyle"> {item.recipe.label} </div>
      <div className="card-image">
        <figure className="image is-4by3">
          <img alt='Profile'  className='imgStyle' src={item.recipe.image}></img>
        </figure>
      </div>
      <div className="card-content cardContentStyle">
        <div className="media">
          <div className="media-content contStyle">
            <p className="subtitle calStyle">Contains {(Math.round(item.recipe.calories/item.recipe.yield))} calories per serving.</p>
            <div className="columns">
              <div className="column">
                <a href={item.recipe.link} className="linkStyle">Link to Website</a>
              </div>
              <div className="column">
              <h1>Likes</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecipeCard;
