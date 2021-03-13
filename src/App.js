import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";

/* Components */
import Main from "./components/main";
import Rover1 from "./components/rover1";
import Rover2 from "./components/rover2";
import Rover3 from "./components/rover3";
import Search from "./components/search";
import ErrorPage from "./components/404";
import Results from "./components/results";


/* where all the links/paths are */
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/rover1" component={Rover1} />
        <Route path="/rover2" component={Rover2} />
        <Route path="/rover3" component={Rover3} />
        <Route path="/search" component={Search} />
        <Route path="/results" component={Results} />
        <Route exact path="/404" component={ErrorPage} />
        <Route path="*"><Redirect to="/404" /></Route>
      </Switch>
    </Router>
  );
}

export default App;
