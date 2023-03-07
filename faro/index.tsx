import React from "react";
import { FaroRoute } from "@grafana/faro-react";
import { Switch, Route } from "react-router-dom";

const Test = () => {
  return (
    <Switch>
      {/* replace it by Route and the test will pass */}
      <FaroRoute path="/">
        <div> I am a page </div>
      </FaroRoute>
    </Switch>
  );
};

export default Test;
