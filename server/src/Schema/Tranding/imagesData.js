import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type imagesData {
    original:OriginalGiphyData
  }
`;

const resolvers = {
  imagesData: {
    original: (images) => images.original,
  },
};

export default {
  typeDefs,
  resolvers,
};
