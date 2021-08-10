import { gql } from "apollo-server-express";
import axios from "axios";
import {
  GIPHY_API_KEY,
  GIPHY_LIMIT,
  GIPHY_OFFSET,
  BASE_URL,
} from "../../Constant";

const typeDefs = gql`
  extend type Query {
    searchGiphy(val: String): [search]
  }
`;
const resolvers = {
  Query: {
    searchGiphy: async (parent, args) => {
      const result = await axios(`${BASE_URL}/v1/gifs/search`, {
        params: {
          api_key: GIPHY_API_KEY,
          q: args.val,
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
