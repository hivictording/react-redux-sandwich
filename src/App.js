import React from 'react';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import thunk from 'redux-thunk'

import IngridentsReducer from './store/reducers/ingredients'
import IngridentsDBReducer from './store/reducers/ingredientsDB'
import CartReducer from './store/reducers/cart'

import Layout from './pages/layout'
import Builder from './pages/builder'
import Cart from './pages/cart'
import Orders from './pages/orders'
import Login from './pages/login'
import Default from './pages/default'

function App() {

  const middleware = [thunk];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const parentReducer = combineReducers({
    ingredients: IngridentsReducer,
    ingredientsDB: IngridentsDBReducer,
    cart: CartReducer
  })

  const store = createStore(parentReducer,composeEnhancers(applyMiddleware(...middleware)));

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
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/orders">
                <Orders/>
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
