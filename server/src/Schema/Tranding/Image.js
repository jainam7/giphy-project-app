import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Image {
    original: ImagesFields
    originalStill: ImagesFields
  }
`;

const resolvers = {
  Image: {
    original: (images) => images.original,
    originalStill: (images) => images.original_still,
  },
};

export default {
  typeDefs,
  resolvers,
};
