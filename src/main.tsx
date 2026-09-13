import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloProvider } from "@apollo/client/react";
import Client from "./graphql/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={Client}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>,
);
