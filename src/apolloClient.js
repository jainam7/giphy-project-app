import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, locations, path, extensions }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${JSON.stringify(path)}, Code: ${extensions.code}`
      );
    });
  }
  if (networkError) {
    const errorMessage = `[Network error]: ${JSON.stringify(networkError)}`;
    console.error(errorMessage);
  }
});

const retryLink = new RetryLink({
  attempts: {
    max: 4,
    retryIf: (error) => {
      return !!error && error?.message === "Failed to fetch";
    },
  },
});

const link = ApolloLink.from([
  retryLink,
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default apolloClient;
