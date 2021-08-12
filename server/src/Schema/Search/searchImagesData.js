import { gql } from "apollo-server-express";

const typeDefs = gql`
  type searchImagesData {
    original: searchOriginalData
    originalStill: searchOriginalStillData
  }
`;

const resolvers = {
  searchImagesData: {
    original: (images) => images.original,
    originalStill: (images) => images.original_still,
  },
};

export default {
  typeDefs,
  resolvers,
};
