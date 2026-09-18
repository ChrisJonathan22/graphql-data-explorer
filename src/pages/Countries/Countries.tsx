// Main countries page

import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CountryList from "../../components/CountryList/CountryList";
import CountryCard from "../../components/CountryCard/CountryCard";

function Countries() {
  const [selectedCountryData, setSelectedCountryData] = useState();
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setCountriesLoadingState] = useState(false);
  const [errorMessage, setCountriesErrorState] = useState("");

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
        errorMessage={errorMessage}
      />
      {selectedCountryData && (
        <div>
          <CountryCard selectedCountryData={selectedCountryData} />
        </div>
      )}
    </>
  );
}

export default Countries;
