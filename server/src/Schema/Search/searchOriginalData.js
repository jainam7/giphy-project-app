import { gql } from "apollo-server-express";

const typeDefs = gql`
  type searchOriginalData {
    url: String
    width: String
    height: String
  }
`;

const resolvers = {
  searchOriginalData: {
    url: (original) => original.url,
    width: (original) => original.width,
    height: (original) => original.height,
  },
};

export default {
  typeDefs,
  resolvers,
};
