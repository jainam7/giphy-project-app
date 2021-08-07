import merge from "lodash/merge";
import flatten from "lodash/flatten";
import search from "./search";
import searchGiphy from "./searchGiphy";
import searchImagesData from "./searchImagesData";
import searchOriginalData from "./searchOriginalData";

const typeDefs = flatten([
  search.typeDefs,
  searchGiphy.typeDefs,
  searchImagesData.typeDefs,
  searchOriginalData.typeDefs,
]);

const resolvers = merge(
  search.resolvers,
  searchGiphy.resolvers,
  searchImagesData.resolvers,
  searchOriginalData.resolvers
);

const graphqlTypeDefsResolversOfSearch = {
  typeDefs,
  resolvers,
};

export default graphqlTypeDefsResolversOfSearch;
