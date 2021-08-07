import React from "react";
import { Route, Switch } from "react-router-dom";
import TradingGiphy from "./Pages/TrendingGiphy";
import Search from "./Pages/Search";
import Home from "./Pages/Home";
import "./styles/index.css";

const Wrapper = () => (
  <div className="center w85">
    <div className="ph3 pv1 background-gray">
      <Search />
      <Switch>
        <Route exact path="/" component={TradingGiphy} />
      </Switch>
    </div>
  </div>
);

export default Wrapper;
