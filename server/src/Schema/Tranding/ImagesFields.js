import { gql } from "apollo-server-express";

const typeDefs = gql`
  type ImagesFields {
    id: ID
    url: String
    width: String
    height: String
    hash: String
  }
`;

const resolvers = {
  ImagesFields: {
    id: (original) => original.id,
    url: (original) => original.url,
    width: (original) => original.width,
    height: (original) => original.height,
    hash: (original) => original.hash,
  },
};

export default {
  typeDefs,
  resolvers,
};
