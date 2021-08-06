import { gql } from "apollo-server-express";
import axios from "axios";

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
          api_key: "IpgIwqOllDLYX6IklCdMPsjZyqdAgPH0",
          limit: 50,
          offset: 0,
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
