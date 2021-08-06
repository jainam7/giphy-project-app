import { gql } from "apollo-server-express";

const typeDefs = gql`
  type user {
    name: String!
    age: int
  }
  type Query {
    getAllUser: [user]
  }
`;
module.exports = { typeDefs };
