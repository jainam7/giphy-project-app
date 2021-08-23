import http from "http";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import Schema from "./Schema/index";
import TrendingGifsDatasource from "./dataSources/trending/TrendingGifsDatasource";
import SearchGifsDataSource from "./dataSources/search/SearchGifsDataSource";

const app = express();

const server = new ApolloServer({
  typeDefs: Schema.typeDefs,
  resolvers: Schema.resolvers,
  dataSources: () => ({
    trendingGifsService: new TrendingGifsDatasource(),
    searchGifsService: new SearchGifsDataSource(),
  }),
});

server.applyMiddleware({
  app,
  path: "/",
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(5000, () => {});
