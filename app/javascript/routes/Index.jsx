import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);


// In this Index.jsx route file, you imported a couple of modules:
// the React module that allows us to use React, and the BrowserRouter,
//  Route, and Switch modules from React Router,
//  which together help us navigate from one route to another.
//  Lastly, you imported your Home component, which will be
//  rendered whenever a request
//  matches the root (/) route.
//  Whenever you want to add more pages to your application,
//  all you need to do is declare a route in this file and
//  match it to the component you want to render for that page.
