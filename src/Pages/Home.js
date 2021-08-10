import React from "react";
import Loader from "../Component/Loader";

const Home = (props) => {
  console.log(props.trendingGifsData);
  const renderGifs = () => {
    if (props.loading) {
      return <Loader />;
    }
    if (props.trendingGifsData) {
      return props.trendingGifsData?.map((el) => {
        return (
          <div key={el.id} className="gif">
            <img
              src={el.images.original.url}
              alt={el.images.title}
              width="250px"
            />
          </div>
        );
      });
    }
  };

  return (
    <>
      <div>
        {props.rerenderError}
        <div className="container gifs">{renderGifs()}</div>
      </div>
    </>
  );
};
export default Home;
