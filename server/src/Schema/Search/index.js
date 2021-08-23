import merge from "lodash/merge";
import flatten from "lodash/flatten";
import searchGiphy from "./searchGiphy";

const typeDefs = flatten([searchGiphy.typeDefs]);

const resolvers = merge(searchGiphy.resolvers);

const graphqlTypeDefsResolversOfSearch = {
  typeDefs,
  resolvers,
};

export default graphqlTypeDefsResolversOfSearch;
