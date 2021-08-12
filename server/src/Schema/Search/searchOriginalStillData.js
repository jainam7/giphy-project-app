import { gql } from "apollo-server-express";

const typeDefs = gql`
  type searchOriginalStillData {
    url: String
    width: String
    height: String
  }
`;

const resolvers = {
  searchOriginalStillData: {
    url: (originalStill) => originalStill.url,
    width: (originalStill) => originalStill.width,
    height: (originalStill) => originalStill.height,
  },
};

export default {
  typeDefs,
  resolvers,
};
