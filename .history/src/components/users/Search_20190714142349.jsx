import React, { Component } from 'react';

class Search extends Component {
    state
  render() {
    return (
      <div>
        <form className="form">
          <input type="text" name="text" placeholder="Search Users..." />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
      </div>
    );
  }
}

export default Search;
