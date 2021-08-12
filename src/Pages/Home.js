import React, { useState } from "react";
import Loader from "../Component/Loader";

const Home = (props) => {
  const [playGifs, pauseGifs] = useState(true);
  const renderIcon = (gif) => {
    if (playGifs) {
      return (
        <div>
          <i className="bi bi-play-circle-fill" key={gif.id}></i>
        </div>
      );
    } else {
      return (
        <div>
          <i className="bi bi-pause-circle-fill" key={gif.id}></i>
        </div>
      );
    }
  };
  const renderGifsImage = (gif) => {
    if (playGifs) {
      return (
        <img
          className="imgWidth"
          key={gif.id}
          src={gif.images.original.url}
          alt={gif.images.title}
        />
      );
    }
    return (
      <img
        className="imgWidth"
        key={gif.id}
        src={gif.images.originalStill.url}
        alt={gif.images.title}
      />
    );
  };
  const renderGifs = () => {
    if (props.loading) {
      return <Loader />;
    }

    if (props.trendingGifsData) {
      return props.trendingGifsData?.map((gif) => {
        return (
          <>
            <div className="gif row">
              <span onClick={() => pauseGifs(!playGifs)} style={{ width: 0 }}>
                {renderIcon(gif)}
              </span>
              {renderGifsImage(gif)}
            </div>
          </>
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
