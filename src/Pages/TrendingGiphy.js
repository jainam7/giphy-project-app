import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TRANDING_GIPHY } from "../GraphQL/Queries";
import Loader from "../Component/Loader";
import Home from "./Home";

const TrendingGiphy = () => {
  const { error, loading, data } = useQuery(GET_ALL_TRANDING_GIPHY);
  const [trendingGifs, setTrendingGifs] = useState([]);
  console.log("search", data);
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log("data", data);
      setTrendingGifs(data.tradingGiphy);
    }
  }, [data]);

  const renderGifs = () => {
    if (loading) {
      return <Loader />;
    }
    return trendingGifs.map((el) => {
      return (
        <div key={el.id} className="gif">
          <img src={el.images.original.url} alt={el.images.title} />
        </div>
      );
    });
  };

  const renderError = () => {
    if (error) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Unable to get Gifs, please try again in a few minutes
        </div>
      );
    }
  };

  return (
    <div className="m-2">
      {renderError()}
      <div>
        <Home trendingGifsData={data} loading={loading} />
      </div>
    </div>
  );
};

export default TrendingGiphy;
