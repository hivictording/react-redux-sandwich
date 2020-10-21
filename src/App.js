import React from 'react';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import IngridentsReducer from './store/reducers/ingredients'

import Layout from './pages/layout'
import Builder from './pages/builder'
import About from './pages/about'
import Orders from './pages/orders'
import Default from './pages/default'

function App() {

  const parentReducer = combineReducers({
    ingredients: IngridentsReducer
  })

  const store = createStore(parentReducer);

  return (
    <Provider store={store}>
      <Router>
      <Layout>
        <Switch>
          <Route exact path={["/home","/"]}>
            <Builder/>
          </Route>
          <Route exact path="/about">
            <About/>
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
