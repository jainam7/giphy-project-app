import React from "react";
import { Route, Switch } from "react-router-dom";
import TradingGiphy from "./Pages/TrendingGiphy";
import "./styles/index.css";

const Wrapper = () => (
  <div>
    <div>
      <Switch>
        <Route exact path="/" component={TradingGiphy} />
      </Switch>
    </div>
  </div>
);

export default Wrapper;
