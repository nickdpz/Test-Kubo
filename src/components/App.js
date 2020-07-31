import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductDetails from '../pages/ProductDetails';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Buy from '../pages/Buy';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;