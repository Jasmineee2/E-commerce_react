import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import account from '../../assets/icons/account.png';
import checkout from '../../assets/icons/checkout.png';
import question from '../../assets/icons/question.png';
import setting from '../../assets/icons/setting.png';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="left">
          <Link className="navbar-brand" to="/">
            <span>SuperBarato</span>
          </Link>
        </div>
        <div className="right">
          <ul className="upperright">
            <li>
              <Link className="navbar-brand" to="/">
                <div className="account">
                  <img src={account} alt={account} />
                </div>
              </Link>
            </li>
            <li>
              <Link className="navbar-brand" to="/">
                <div className="setting">
                  <img src={setting} alt={setting} />
                </div>
              </Link>
            </li>
            <li>
              <Link className="navbar-brand" to="/">
                <div className="checkout">
                  <img src={checkout} alt={checkout} />
                </div>
              </Link>
            </li>
            <li>
              <Link className="navbar-brand" to="/">
                <div className="question">
                  <img src={question} alt={question} />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
