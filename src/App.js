import React,{Suspense} from 'react';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import thunk from 'redux-thunk'

import IngridentsReducer from './store/reducers/ingredients'
import IngridentsDBReducer from './store/reducers/ingredientsDB'
import CartReducer from './store/reducers/cart'
import UserReducer from './store/reducers/user'
import OrderReducer from './store/reducers/order'
import OrdersReducer from './store/reducers/orders'

import Layout from './pages/layout'
import Builder from './pages/builder'
import Cart from './pages/cart'
// import Orders from './pages/orders'
import Login from './pages/login'
import Default from './pages/default'
import Spinner from './UI/Spinner/spinner';

// testing git

function App() {

  const middleware = [thunk];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const parentReducer = combineReducers({
    ingredients: IngridentsReducer,
    ingredientsDB: IngridentsDBReducer,
    cart: CartReducer,
    user: UserReducer,
    saveOrder: OrderReducer,
    orders: OrdersReducer
  })

  const store = createStore(parentReducer,composeEnhancers(applyMiddleware(...middleware)));

  const Orders = React.lazy(() => import('./pages/orders'));

  return (
    <Provider store={store}>
      <Router>
          <Layout>
            <Switch>
              <Route exact path={["/home","/"]} render={(routeProps) => <Builder {...routeProps}/>}>
                {/* <Builder/> */}
              </Route>
              <Route exact path="/cart">
                <Cart/>
              </Route>
              <Route exact path="/login" render={(routeProps) => <Login {...routeProps}/>}>
                {/* <Login/> */}
              </Route>
              <Route exact path="/orders">
                <Suspense fallback={<Spinner/>}>
                  <Orders/>
                </Suspense> 
              </Route>
              <Route>
                <Default/>
              </Route>
            </Switch>
          </Layout>
        
    </Router>
    </Provider>
    
    
  );
}

export default App;
