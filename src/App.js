import React from 'react';
import './App.css';
import './util/custom_fields'
import {BrowserRouter as Router, Route, Switch, useHistory, withRouter} from 'react-router-dom';
import YouthRegistration from './components/YouthRegistration'
import ChurchRegistration from './components/ChurchRegistration'
import Sucess from './components/Sucess';
import Footer from './components/Footer'


function App(props) {
  // let history = useHistory();
  return (
    <>
    <body>
      <Router>
      <nav>
        <ul>
          <li><a href="/youth">Youth</a></li>
          <li><a href="/church">Church</a></li>
        </ul>
      </nav>

        <Switch>
          <Route path="/youth">
            <YouthRegistration />
          </Route>
          <Route path="/church">
            <ChurchRegistration />
          </Route>
          <Route path="/sucess">
            <Sucess />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </body>
    </>
  );
}

export default App;
