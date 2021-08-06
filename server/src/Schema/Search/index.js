import merge from "lodash/merge";
import flatten from "lodash/flatten";
import search from "./search";
import searchGiphy from "./searchGiphy";

const typeDefs = flatten([search.typeDefs, searchGiphy.typeDefs]);

const resolvers = merge(search.resolvers, searchGiphy.resolvers);

const graphqlTypeDefsResolversOfSearch = {
  typeDefs,
  resolvers,
};

export default graphqlTypeDefsResolversOfSearch;
