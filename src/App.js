import React from 'react';
import './App.css';
import './util/custom_fields'
import {BrowserRouter as Router, Route, Switch, useHistory, withRouter} from 'react-router-dom';
import YouthRegistration from './components/YouthRegistration'
import ChurchRegistration from './components/ChurchRegistration'


function App(props) {
  // let history = useHistory();
  return (
    <body>
      <Router>
        <Switch>
          <Route path="/">
            <YouthRegistration></YouthRegistration>
          </Route>
          <Route path="/church">
            <ChurchRegistration></ChurchRegistration>
          </Route>
        </Switch>
      </Router>
    </body>
  );
}

export default App;
