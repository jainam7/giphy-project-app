import { gql } from "apollo-server-express";

const typeDefs = gql`
  type searchImagesData {
    original: searchOriginalData
  }
`;

const resolvers = {
  searchImagesData: {
    original: (images) => images.original,
  },
};

export default {
  typeDefs,
  resolvers,
};
