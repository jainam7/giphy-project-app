import React, { useState } from "react";
import ResizeObserver from "react-resize-observer";
import Loader from "../Component/Loader";

const Home = (props) => {
  console.log(props.trendingGifsData);
  const [width, setWidth] = useState(window.innerWidth);
  const renderGifs = () => {
    if (props.loading) {
      return <Loader />;
    }
    if (props.trendingGifsData) {
      return props.trendingGifsData?.map((gif) => {
        return (
          <div key={gif.id} className="gif row">
            <img
              className="imgWidth"
              src={gif.images.original.url}
              alt={gif.images.title}
              width={width}
            />
            <ResizeObserver
              onResize={({ width }) => {
                setWidth(width);
              }}
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
