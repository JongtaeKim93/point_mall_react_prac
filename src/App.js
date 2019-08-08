import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './point_mall_prac/Home';
import Header from './point_mall_prac/Header';
import Footer from './point_mall_prac/Footer';
import ItemDetail from './point_mall_prac/ItemDetail';
import CategoryItems from './point_mall/CategoryItems';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items/:itemId" component={ItemDetail} />
          <Route exact path="/categories/:categoryId" component={CategoryItems} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
