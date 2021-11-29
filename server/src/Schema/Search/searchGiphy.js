import { gql } from "apollo-server-express";

const typeDefs = gql`
  extend type Query {
    searchGiphy(val: String, offSet: String): [Giphy]
  }
`;
const resolvers = {
  Query: {
    searchGiphy: async (parent, args, context) =>
      context.dataSources.searchGifsService.getAllSearchedGifs({
        searchKey: args.val,
        offSet: args.offSet,
      }),
  },
};

export default {
  typeDefs,
  resolvers,
};
