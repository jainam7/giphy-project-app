import axios from "axios";
import {
  GIPHY_API_KEY,
  GIPHY_LIMIT,
  GIPHY_OFFSET,
  BASE_URL,
} from "../../Constant";

const SearchGifsService = () => {
  const getAllSearchedGifs = async ({ searchKey, offSet }) => {
    console.log("offsetsssssss", offSet);
    const response = await axios(`${BASE_URL}/v1/gifs/search`, {
      params: {
        api_key: GIPHY_API_KEY,
        q: searchKey,
        limit: GIPHY_LIMIT,
        offset: offSet,
      },
    });

    console.log("lengthsssssss", response.data.data.length);
    return await Promise.all(response.data.data);
  };
  return {
    getAllSearchedGifs,
  };
};

export default SearchGifsService;
