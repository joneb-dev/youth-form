import React from 'react';
import './App.css';
import './util/custom_fields';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import YouthRegistration from './components/YouthRegistration/YouthRegistration.component';
import ChurchRegistration from './components/ChurchRegistration/ChurchRegistration.component';
import ChildrensRegistration from './components/ChildrensRegistration/ChildrensRegistration.component';
import Sucess from './components/Sucess';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
	return (
		<>
			<body>
				<Router>
					<Switch>
						<Route path="/youth" exact component={YouthRegistration} />
						<Route path="/church" exact component={ChurchRegistration} />
						<Route path="/children" exact component={ChildrensRegistration} />
						<Route path="/sucess">
							<Sucess />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
				<Footer />
			</body>
		</>
	);
}

export default App;
