import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rbq4ip0v8n01wb33gg7yh0/master',
  cache: new InMemoryCache()
});