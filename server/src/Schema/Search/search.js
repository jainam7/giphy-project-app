import { gql } from "apollo-server-express";

const typeDefs = gql`
  type search {
    id: String
    url: String
  }
`;

const resolvers = {
  search: {
    id: (giphy) => giphy.id,
    url: (giphy) => giphy.url,
  },
};

export default {
  typeDefs,
  resolvers,
};
