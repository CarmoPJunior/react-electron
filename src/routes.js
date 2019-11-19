import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/products';
import InfoProduct from './pages/products/infoProduct';
import Task from './pages/tasks';


const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/products/" component={Product} />
            <Route path="/products/:id" component={InfoProduct} />
            <Route path="/tasks/" component={Task} />
        </Switch>
    </BrowserRouter>
);

export default Routes;