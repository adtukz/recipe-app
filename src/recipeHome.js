import React from "react";
import { styles } from './index.css';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      clicked: prevState.clicked + 1
    }));
  }
  render() {
    return (
      <div className="column is-4">
        <div className="card">
          <div className="card-title titleStyle"> {this.props.name} </div>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt='Profile'  className='imgStyle' src={this.props.image}></img>
            </figure>
          </div>
          <div className="card-content cardContentStyle">
            <div className="media">
              <div className="media-content contStyle">
                <p className="subtitle calStyle">Contains {(Math.round(this.props.calories/this.props.yield))} calories per serving.</p>
                <div className="columns">
                  <div className="column">
                    <a href={this.props.link} className="linkStyle">Link to Website</a>
                  </div>
                  <div className="column">
                  <h1>Likes {this.state.clicked}</h1>
                    <button type="button" className="likeButton" onClick={this.handleClick}>Like Recipe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserCard;
