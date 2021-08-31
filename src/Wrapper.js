import React from "react";
import { Route, Switch } from "react-router-dom";
import Giphy from "./Pages/Giphy";
import "./styles/index.css";

const Wrapper = () => (
  <div>
    <div>
      <Switch>
        <Route exact path="/" component={Giphy} />
      </Switch>
    </div>
  </div>
);

export default Wrapper;
