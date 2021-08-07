import { gql } from "apollo-server-express";
import axios from "axios";
import { GIPHY_API_KEY, GIPHY_LIMIT, GIPHY_OFFSET } from "../../Constant";

const typeDefs = gql`
  type Query {
    tradingGiphy: [tradingGiphyData]
  }
`;
const resolvers = {
  Query: {
    tradingGiphy: async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/trending", {
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
