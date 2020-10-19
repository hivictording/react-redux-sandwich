import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Layout from './pages/layout'
import Builder from './pages/builder'
import About from './pages/about'
import Orders from './pages/orders'
import Default from './pages/default'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={["/builder","/"]}>
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
  );
}

export default App;
