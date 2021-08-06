import merge from "lodash/merge";
import flatten from "lodash/flatten";
import Tranding from "./Tranding/index";
import Search from "./Search/index";

const typeDefs = flatten([Tranding.typeDefs, Search.typeDefs]);

const resolvers = merge(Tranding.resolvers, Search.resolvers);

const schemasTypeDefsResolvers = {
  typeDefs,
  resolvers,
};

export default schemasTypeDefsResolvers;
