import { FaroRoute } from "@grafana/faro-react";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Page1, Page2 } from "./pages";

const Routes = () => (
  <Switch>
    <Route path="/one">
      <Page1 />
    </Route>
    <Route path="/two">
      <Page2 />
    </Route>
  </Switch>
);

export default Routes;
