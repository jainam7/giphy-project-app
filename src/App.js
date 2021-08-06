import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Giphy from "./components/giphy";
import "./App.css";
const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.giphy.com/v1/gifs/trending/",
    variables: {
      key: "IpgIwqOllDLYX6IklCdMPsjZyqdAgPH0",
    },
  });
  return (
    <div>
      <ApolloProvider client={client}>
        <Giphy />
      </ApolloProvider>
    </div>
  );
};

export default App;
