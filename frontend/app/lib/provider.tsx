"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
  //   uri: "https://r62icpp0.api.sanity.io/v2023-08-01/graphql/production/default",
  cache: new InMemoryCache(),
});

interface IGraphQlProviderProps {
  children: React.ReactNode;
}

const GraphQlProvider: React.FC<IGraphQlProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQlProvider;
