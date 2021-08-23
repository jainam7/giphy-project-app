import axios from "axios";
import {
  GIPHY_API_KEY,
  GIPHY_LIMIT,
  GIPHY_OFFSET,
  BASE_URL,
} from "../../Constant";

const TrendingGifsService = () => {
  const getAllTrendingGifs = async () => {
    const response = await axios(`${BASE_URL}/v1/gifs/trending`, {
      params: {
        api_key: GIPHY_API_KEY,
        limit: GIPHY_LIMIT,
        offset: GIPHY_OFFSET,
      },
    });

    console.log("datta", response.data.data);
    console.log(
      "dattaStilllll",
      response.data.data.map((val) => val.images.original_still)
    );
    return await Promise.all(response.data.data);
  };
  return {
    getAllTrendingGifs,
  };
};

export default TrendingGifsService;
