import merge from "lodash/merge";
import flatten from "lodash/flatten";
import imagesData from "./imagesData";
import OriginalGiphyData from "./OriginalGiphyData";
import tradingGiphy from "./tradingGiphy";
import tradingGiphyData from "./tradingGiphyData";

const typeDefs = flatten([
  tradingGiphy.typeDefs,
  tradingGiphyData.typeDefs,
  imagesData.typeDefs,
  OriginalGiphyData.typeDefs,
]);

const resolvers = merge(
  tradingGiphy.resolvers,
  tradingGiphyData.resolvers,
  imagesData.resolvers,
  OriginalGiphyData.resolvers
);

const graphqlTypeDefsResolversOfTrending = { typeDefs, resolvers };

export default graphqlTypeDefsResolversOfTrending;
