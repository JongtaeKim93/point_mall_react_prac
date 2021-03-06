import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './point_mall_prac/Home';
import Login from './point_mall_prac/Login'
import Header from './point_mall_prac/Header';
import Footer from './point_mall_prac/Footer';
import ItemDetail from './point_mall_prac/ItemDetail';
import MyItems from './point_mall_prac/MyItems';
import CategoryItems from './point_mall_prac/CategoryItems';
import CartItems from './point_mall_prac/CartItems';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/items/:itemId" component={ItemDetail} />
          <Route exact path="/me/items" component={MyItems} />
          <Route exact path="/categories/:categoryId" component={CategoryItems} />
          <Route exact path="/cart/items" component={CartItems} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
