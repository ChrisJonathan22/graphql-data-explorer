import { useState } from "react";
import Countries from "./pages/Countries/Countries";

import "./App.css";

function App() {
  return (
    <>
      <h1>GraphQL Data Explorer</h1>
      <Countries />
    </>
  );
}

export default App;

/*

Requirements

Connect Apollo Client to a GraphQL endpoint. => https://countries.trevorblades.com/
Write GraphQL query.
Request specific fields.
Pass variables into queries.
Handle loading/errors.
Display the returned data.
Add searching/filtering.
Add pagination if the API supports it.
Type the data with TypeScript.


*/
