import { gql } from "apollo-server-express";

const typeDefs = gql`
  type OriginalStillGiphyData {
    url: String
    width: String
    height: String
  }
`;

const resolvers = {
  OriginalStillGiphyData: {
    url: (originalStill) => originalStill.url,
    width: (originalStill) => originalStill.width,
    height: (originalStill) => originalStill.height,
  },
};

export default {
  typeDefs,
  resolvers,
};
