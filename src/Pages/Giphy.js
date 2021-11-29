import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import debounce from "lodash/debounce";
import { GET_ALL_TRANDING_GIPHY, SEARCH_BY_GIPHY } from "../GraphQL/Queries";
import Home from "./Home";
import Loader from "../Component/Loader";
import "../styles/index.css";

const Giphy = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [result, setResult] = useState([]);
  const [offset, setOffset] = useState("");
  const [toggle, setToggle] = useState(false);
  const {
    error: isError,
    loading: isLoading,
    data: trendingData,
  } = useQuery(GET_ALL_TRANDING_GIPHY, {
    onCompleted: (data) => {
      const { content, hasMore } = data?.tradingGiphy;
      console.log("contentssssss", content);
      setResult(content);
      setOffset(hasMore);
    },
  });

  const { data, loading, error } = useQuery(SEARCH_BY_GIPHY, {
    variables: { val: searchFilter, offSet: offset },
  });
  useEffect(() => {
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
    if (data) {
      setResult(data?.searchGiphy);
      setOffset(data?.searchGiphy.length.toString());
    }
  };

  const handleToggleClick = (event) => {
    if (event) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const onLoadMore = () => {
    SEARCH_BY_GIPHY.fetchMore({
      variables: {
        offset: data?.searchGiphy.length.toString(),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        console.log("prevsss", prev);
        return Object.assign({}, prev, {
          chapters: [...prev.chapters, ...fetchMoreResult.chapters],
        });
      },
    });
  };

  const handleScroll = ({ currentTarget }) => {
    if (
      currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight
    ) {
      onLoadMore();
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
            onScroll={(e) => handleScroll(e)}
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

export default Giphy;
