import http from "http";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import Schema from "./Schema/index";

const app = express();

const server = new ApolloServer({
  typeDefs: Schema.typeDefs,
  resolvers: Schema.resolvers,
});

server.applyMiddleware({
  app,
  path: "/",
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(5000, () => {});
