import { random } from "lodash";
import React, { useState } from "react";
import Loader from "../Component/Loader";

const Home = (props) => {
  const [playGifs, pauseGifs] = useState(true);
  const renderGifsImage = (gif, uniqueId, uniqueIdStill, index) => {
    // console.log("gifssss", gif);
    if (playGifs) {
      return (
        <img
          className="imgWidth"
          key={index}
          src={gif.images.original.url}
          alt={gif.images.title}
        />
      );
    }
    return (
      <img
        className="imgWidth"
        key={index}
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
      return props.trendingGifsData?.map((gif, index) => {
        const today = new Date();
        const uniqueId = gif.id + Math.random(1000);
        const uniqueIdStill = gif.id + today.getMilliseconds();
        console.log("props.trendingGifsData", props.trendingGifsData);
        return (
          <>
            <div className="gif row">
              <span onClick={() => pauseGifs(!playGifs)} style={{ width: 0 }}>
                <i
                  className={
                    playGifs
                      ? "bi bi-play-circle-fill"
                      : "bi bi-pause-circle-fill"
                  }
                  key={index}
                ></i>
              </span>
              {renderGifsImage(gif, uniqueId, uniqueIdStill, index)}
            </div>
          </>
        );
      });
    }
  };

  return (
    <>
      <div>
        {props.renderError}
        <div className="container gifs">{renderGifs()}</div>
      </div>
    </>
  );
};
export default Home;
