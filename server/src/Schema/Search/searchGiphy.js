import { gql } from "apollo-server-express";

const typeDefs = gql`
  extend type Query {
    searchGiphy(val: String): [Giphy]
  }
`;
const resolvers = {
  Query: {
    searchGiphy: async (parent, args, context) =>
      context.dataSources.searchGifsService.getAllSearchedGifs({
        searchKey: args.val,
      }),
  },
};

export default {
  typeDefs,
  resolvers,
};
