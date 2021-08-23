import axios from "axios";
import {
  GIPHY_API_KEY,
  GIPHY_LIMIT,
  GIPHY_OFFSET,
  BASE_URL,
} from "../../Constant";

const SearchGifsService = () => {
  const getAllSearchedGifs = async ({ searchKey }) => {
    const response = await axios(`${BASE_URL}/v1/gifs/search`, {
      params: {
        api_key: GIPHY_API_KEY,
        q: searchKey,
        limit: GIPHY_LIMIT,
        offset: GIPHY_OFFSET,
      },
    });

    return await Promise.all(response.data.data);
  };
  return {
    getAllSearchedGifs,
  };
};

export default SearchGifsService;
