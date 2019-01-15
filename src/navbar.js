import React from "react";
import { styles } from './index.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodFilter: ""
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Food: </label>
        <input type="text" id="filter"/>
      </div>
      )
  }
}

export default NavBar;
