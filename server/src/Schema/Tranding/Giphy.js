import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Giphy {
    id: ID
    type: String
    url: String
    username: String
    source: String
    title: String
    rating: String
    images: Image
  }
`;

const resolvers = {
  Giphy: {
    id: (tranding) => tranding.id,
    type: (tranding) => tranding.type,
    url: (tranding) => tranding.url,
    images: (tranding) => tranding.images,
  },
};

export default {
  typeDefs,
  resolvers,
};
