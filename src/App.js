import React from "react";
import "./App.css";
import "./util/custom_fields";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  withRouter,
} from "react-router-dom";
import YouthRegistration from "./components/YouthRegistration";
import ChurchRegistration from "./components/ChurchRegistration";
import Sucess from "./components/Sucess";
import Footer from "./components/Footer";
import BasicCard from "./components/Card";
import Home from "./components/Home";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  Typography,
  Container,
  Card,
  CardActions,
  Button,
  CardContent,
} from "@material-ui/core";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function App(props) {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // let history = useHistory();
  return (
    <>
      <body>
        <Router>
          <Switch>
            <Route path="/youth" exact component={YouthRegistration} />
            <Route path="/church" exact component={ChurchRegistration} />
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
