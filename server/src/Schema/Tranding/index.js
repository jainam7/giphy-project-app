import merge from "lodash/merge";
import flatten from "lodash/flatten";
import Image from "./Image";
import ImagesFields from "./ImagesFields";
import tradingGiphy from "./tradingGiphy";
import Giphy from "./Giphy";

const typeDefs = flatten([
  tradingGiphy.typeDefs,
  Giphy.typeDefs,
  Image.typeDefs,
  ImagesFields.typeDefs,
]);

const resolvers = merge(
  tradingGiphy.resolvers,
  Giphy.resolvers,
  Image.resolvers,
  ImagesFields.resolvers
);

const graphqlTypeDefsResolversOfTrending = { typeDefs, resolvers };

export default graphqlTypeDefsResolversOfTrending;
