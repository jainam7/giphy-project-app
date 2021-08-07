import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import Loader from "../Component/Loader";
import { SEARCH_BY_GIPHY } from "../GraphQL/Queries";
import Home from "./Home";

const Search = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [executeSearch, { data, loading, error }] =
    useLazyQuery(SEARCH_BY_GIPHY);
  console.log("search", data);
  return (
    <>
      <div>
        Search
        <input type="text" onChange={(e) => setSearchFilter(e.target.value)} />
        <button
          onClick={() =>
            executeSearch({
              variables: { val: searchFilter },
            })
          }
        >
          OK
        </button>
        {console.log("search result ", data)}
        <Home trendingGifsData={data} loading={loading} />
      </div>
    </>
  );
};

export default Search;
