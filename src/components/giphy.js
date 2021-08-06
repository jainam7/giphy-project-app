import React, { useEffect, useState } from "react";
import axios from "axios";

const Giphy = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
            limit: 1000,
            offset: 0,
          },
        });

        console.log(results);
        setData(results.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    return data.map((el) => {
      return (
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url} alt={el.source} />
        </div>
      );
    });
  };
  return (
    <view style={{ backgroundColor: "black" }}>
      <div
        style={{
          backgroundColor: "black",
          flexDirection: "row",
          display: "block",
          width: "100%",
        }}
        className="container gifs"
      >
        <section>{renderGifs()}</section>
      </div>
    </view>
  );
};

export default Giphy;
