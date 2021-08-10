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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-play"
          viewBox="0 0 16 16"
          onClick={() => console.log("data")}
        >
          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
        </svg>
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
