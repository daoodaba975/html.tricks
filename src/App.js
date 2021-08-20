import React from 'react';
import LandingPage from './Containers/LandingPage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <>
    <div>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage}/>
        </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;
