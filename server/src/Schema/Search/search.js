import { gql } from "apollo-server-express";

const typeDefs = gql`
  type search {
    id: String
    url: String
    source: String
    title: String
    images: searchImagesData
  }
`;

const resolvers = {
  search: {
    id: (giphy) => giphy.id,
    url: (giphy) => giphy.url,
    source: (giphy) => giphy.source,
    title: (giphy) => giphy.title,
  },
};

export default {
  typeDefs,
  resolvers,
};
