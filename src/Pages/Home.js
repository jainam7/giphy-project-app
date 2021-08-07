import React, { useState } from "react";
import Loader from "../Component/Loader";

const Home = (props) => {
  const giphyResults = props.trendingGifsData?.searchGiphy
    ? props.trendingGifsData?.searchGiphy
    : props.trendingGifsData?.tradingGiphy;
  const renderGifs = () => {
    if (props.loading) {
      return <Loader />;
    }
    if (props.trendingGifsData) {
      return giphyResults?.map((el) => {
        return (
          <div key={el.id} className="gif">
            <img src={el.images.original.url} alt={el.images.title} />
          </div>
        );
      });
    }
  };

  return (
    <>
      <div className="container gifs">{renderGifs()}</div>
      {console.log("giphyResults", giphyResults)}
    </>
  );
};
export default Home;
