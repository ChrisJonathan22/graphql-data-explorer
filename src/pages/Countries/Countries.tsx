// Main countries page

import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CountryList from "../../components/CountryList/CountryList";
import CountryCard from "../../components/CountryCard/CountryCard";

function Countries() {
  const [selectedCountryData, setSelectedCountryData] = useState();
  const [countriesData, setCountriesData] = useState();
  const [loading, setCountriesLoadingState] = useState(false);
  const [error, setCountriesErrorState] = useState(false);

  return (
    <>
      <SearchBar
        setCountriesData={setCountriesData}
        setCountriesLoadingState={setCountriesLoadingState}
        setCountriesErrorState={setCountriesErrorState}
        setSelectedCountryData={setSelectedCountryData}
      />
      <CountryList
        countriesData={countriesData}
        setSelectedCountryData={setSelectedCountryData}
        loading={loading}
        error={error}
      />
      {selectedCountryData && (
        <div>
          <h3>Country Card</h3>
          <CountryCard selectedCountryData={selectedCountryData} />
        </div>
      )}
    </>
  );
}

export default Countries;
