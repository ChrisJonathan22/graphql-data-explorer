// Main countries page

import React, { use, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CountryList from "../../components/CountryList/CountryList";
import CountryCard from "../../components/CountryCard/CountryCard";

function Countries() {
  const [selectedCountryData, setSelectedCountryData] = useState();
  const [countriesData, setCountriesData] = useState();
  const [loading, setCountriesLoadingState] = useState(false);
  const [error, setCountriesErrorState] = useState(false);

  loading;
  setCountriesErrorState(error);
  return (
    <>
      <SearchBar
        setCountriesData={setCountriesData}
        setCountriesLoadingState={setCountriesLoadingState}
        setCountriesErrorState={setCountriesErrorState}
      />
      <div>Countries</div>
      <CountryList
        countriesData={countriesData}
        setSelectedCountryData={setSelectedCountryData}
        loading={loading}
        error={error}
      />
      {selectedCountryData && (
        <CountryCard selectedCountryData={selectedCountryData} />
      )}
    </>
  );
}

export default Countries;
