import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { SEARCH_BY_GIPHY } from "../GraphQL/Queries";
import debounce from "lodash/debounce";
import Loader from "../Component/Loader";
import "../styles/index.css";

const Search = ({ props }) => {
  const [searchFilter, setSearchFilter] = useState("");

  const { data, loading, error } = useQuery(SEARCH_BY_GIPHY, {
    variables: { val: searchFilter },
  });

  const handleSearchChange = debounce((event) => {
    setSearchFilter(event.target.value);
  }, 1000);

  const handleClick = () => {
    if (loading) {
      <Loader />;
    }
    props?.setResult(data?.searchGiphy);
  };

  return (
    <div className="search">
      {error ? console.log(error) : null}
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
  );
};

export default Search;
