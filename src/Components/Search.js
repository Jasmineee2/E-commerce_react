import React, { Component } from 'react';
import Categories from '../Components/Category/Categories';
import Products from '../utils/products';
import './Search.scss';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="left-categories">
          <Categories />
        </div>
        <div className="right-products">
          <Products />
        </div>
      </div>
    );
  }
}

export default Search;
