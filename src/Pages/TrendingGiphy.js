import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import debounce from "lodash/debounce";
import { GET_ALL_TRANDING_GIPHY, SEARCH_BY_GIPHY } from "../GraphQL/Queries";
import Home from "./Home";
import Loader from "../Component/Loader";

const TrendingGiphy = () => {
  const {
    error: isError,
    loading: isLoading,
    data: trendingData,
  } = useQuery(GET_ALL_TRANDING_GIPHY);

  const [searchFilter, setSearchFilter] = useState("");
  const [result, setResult] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { data, loading, error } = useQuery(SEARCH_BY_GIPHY, {
    variables: { val: searchFilter },
  });
  useEffect(() => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {isError}
        </div>
      );
    }
    if (isLoading) {
      <Loader />;
    }
    if (trendingData) {
      setResult(trendingData?.tradingGiphy);
    }
  }, [trendingData]);

  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {isError}
        </div>
      );
    }
    if (error) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {error}
        </div>
      );
    }
  };

  const handleSearchChange = debounce((event) => {
    setSearchFilter(event.target.value);
  }, 1000);

  const handleClick = () => {
    if (loading) {
      <Loader />;
    }
    setResult(data?.searchGiphy);
  };

  const handleToggleClick = (event) => {
    console.log("event", event);
    if (event) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div
      className="m-2"
      style={
        toggle ? { backgroundColor: "black" } : { backgroundColor: "white" }
      }
    >
      {renderError()}
      <div>
        <div className="form-check form-switch float">
          <input
            className="form-check-input toggle"
            type="checkbox"
            onClick={(event) => handleToggleClick(event.target.checked)}
          ></input>
          <label className="form-check-label toggleText">
            {toggle ? "Changed To Light Theme" : "Changed To Dark Theme "}
          </label>
        </div>
        <div className="search">
          <input
            onChange={(e) => handleSearchChange(e)}
            type="text"
            placeholder="search"
            className="form-control"
          />
          <button onClick={handleClick} className="btn btn-primary mx-2">
            Search
          </button>
        </div>
      </div>
      <Home
        trendingGifsData={result}
        loading={loading}
        renderError={renderError}
      />
    </div>
  );
};

export default TrendingGiphy;
