import { gql } from "apollo-server-express";
import axios from "axios";
import {
  GIPHY_API_KEY,
  GIPHY_LIMIT,
  GIPHY_OFFSET,
  BASE_URL,
} from "../../Constant";

const typeDefs = gql`
  type Query {
    tradingGiphy: [tradingGiphyData]
  }
`;
const resolvers = {
  Query: {
    tradingGiphy: async () => {
      const result = await axios(`${BASE_URL}/v1/gifs/trending`, {
        params: {
          api_key: GIPHY_API_KEY,
          limit: GIPHY_LIMIT,
          offset: GIPHY_OFFSET,
        },
      });
      return await Promise.all(result.data.data);
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
