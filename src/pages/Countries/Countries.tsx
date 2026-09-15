// Main countries page

import React, { useState } from "react";
import CountryList from "../../components/CountryList/CountryList";
import CountryCard from "../../components/CountryCard/CountryCard";

function Countries() {
  const [countryData, setCountryData] = useState();
  return (
    <>
      <div>Countries</div>
      <CountryList setCountryData={setCountryData} />
      <CountryCard selectedCountryData={countryData} />
    </>
  );
}

export default Countries;
