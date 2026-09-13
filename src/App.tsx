import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Countries from "./pages/Countries/Countries";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>GraphQL Data Explorer</h1>

      <SearchBar />
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
