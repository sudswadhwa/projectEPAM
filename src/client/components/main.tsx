import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import BookList from "./books";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={BookList} />
    </Switch>
  </main>
);

export default Main;
