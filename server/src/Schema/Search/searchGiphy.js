import { gql } from "apollo-server-express";
import axios from "axios";

const typeDefs = gql`
  extend type Query {
    searchGiphy(val: String!): [search]
  }
`;
const resolvers = {
  Query: {
    searchGiphy: async (parent, args) => {
      const result = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "IpgIwqOllDLYX6IklCdMPsjZyqdAgPH0",
          q: args.val,
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
