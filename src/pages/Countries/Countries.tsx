// Main countries page

import React from "react";
import CountryList from "../../components/CountryList/CountryList";
import { useQuery } from "@apollo/client/react";
import { TRACKS } from "../../graphql/queries/countries";

function Countries() {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) console.log("Loading...");

  if (error) console.log(`Error! ${error.message}`);

  console.log(JSON.stringify(data));

  return (
    <>
      <div>Countries</div>
      <CountryList />
    </>
  );
}

export default Countries;
