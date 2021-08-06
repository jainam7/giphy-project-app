import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type OriginalGiphyData {
    url:String
    width:String
    height:String
  }
`;

const resolvers = {
    OriginalGiphyData: {
    url: (original) => original.url,
    width:(original) => original.width,
    height:(original) => original.height,

  },
};

export default {
  typeDefs,
  resolvers,
};
