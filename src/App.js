import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Search from './Components/Search';
import Checkout from './Components/Checkout';
import Profile from './Components/Profile';
import Default from './Components/Default';
import './App.scss';

const App = () => {
  return (
    <div>
      <header>
        <nav className="wrapper">
          <NavBar />
        </nav>
      </header>
      <main className="wrapper">
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={Default} />
          <Route component={() => <p>This page does not exist!</p>} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
