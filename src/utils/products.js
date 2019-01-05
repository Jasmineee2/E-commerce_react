import React, { Component } from 'react';
import bootsbrown from '../assets/products/bootsbrown.jpg';
import couch from '../assets/products/couch.jpg';
import cup from '../assets/products/cup.jpg';
import cupblack from '../assets/products/cupblack.jpg';
import forkids from '../assets/products/forkids.jpg';
import heels from '../assets/products/heels.jpg';
import heelspink from '../assets/products/heelspink.jpg';
import './products.scss';
import { isMetaProperty } from 'babel-types';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      products: [
        {
          id: 1,
          image: bootsbrown,
          category: 'shoes',
          price: '200',
          color: 'brown',
          title: 'brown-boots'
        },
        {
          id: 2,
          image: couch,
          category: 'furniture',
          price: '300',
          color: 'pink',
          title: 'pink-couch'
        },
        {
          id: 3,
          image: cup,
          category: 'houseitem',
          price: '5',
          color: 'white',
          title: 'white-cup'
        },
        {
          id: 4,
          image: cupblack,
          category: 'houseitem',
          price: '10',
          color: 'black',
          title: 'black-cup'
        },
        {
          id: 5,
          image: forkids,
          category: 'toys',
          price: '10',
          color: 'yellow',
          title: 'yellow-items'
        },
        {
          id: 6,
          image: heels,
          category: 'shoes',
          price: '50',
          color: 'navy',
          title: 'navy-heels'
        },
        {
          id: 7,
          image: heelspink,
          category: 'shoes',
          price: '60',
          color: 'pink',
          title: 'pink-heels'
        }
      ]
    };
  }
  search(ev) {
    this.setState({ searchValue: ev.target.value });
  }
  render() {
    const count = this.state.products ? this.state.products.length : 0;
    if (count === 0) return <p>There are no item.</p>;

    const searchResults = this.state.products.filter(product => {
      let search = this.state.searchValue || '';
      const searchLower = search.toLowerCase();
      return (
        product.category.toLowerCase().indexOf(searchLower) >= 0 ||
        product.color.toLowerCase().indexOf(searchLower) >= 0
      );
    });

    return (
      <div className="products">
        <input
          value={this.state.searchValue}
          type="search"
          className="find"
          placeholder="Find items..."
          onChange={this.search.bind(this)}
        />
        <span>{count} items</span>
        <ul className="items">
          {searchResults.map(item => {
            return (
              <li className="item">
                <img src={item.image} alt={item.title} />
                {/* <span>{item.price}</span> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
