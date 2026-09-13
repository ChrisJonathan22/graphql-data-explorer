// Apollo Client Configuration

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


const Client = new ApolloClient({
  link: new HttpLink({
    uri: "https://countries.trevorblades.com/",
  }),
  cache: new InMemoryCache(),
});


export default Client;