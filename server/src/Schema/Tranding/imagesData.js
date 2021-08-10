import { gql } from "apollo-server-express";

const typeDefs = gql`
  type imagesData {
    original: OriginalGiphyData
    originalStill: OriginalStillGiphyData
  }
`;

const resolvers = {
  imagesData: {
    original: (images) => images.original,
    originalStill: (images) => images.original_still,
  },
};

export default {
  typeDefs,
  resolvers,
};
