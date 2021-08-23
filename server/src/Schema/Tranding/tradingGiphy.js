import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    tradingGiphy: [Giphy]
  }
`;
const resolvers = {
  Query: {
    tradingGiphy: async (parent, args, context) =>
      context.dataSources.trendingGifsService.getAllTrendingGifs(),
  },
};

export default {
  typeDefs,
  resolvers,
};
