import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client/react";
import { TRACKS } from "../../graphql/queries/countries";
import { type CountryQuery } from "../../types/country";

function CountryList(props) {
  // const { loading, error, data } = useQuery<CountryQuery>(TRACKS);

  const { setSelectedCountryData, countriesData, loading, error } = props;

  return (
    <>
      <h3>searchResults</h3>
      {error && <h3>There was an error {error.message} </h3>}
      {loading && (
        <img
          alt="Loading gif"
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJsaTBmaWNhNWtlMGd5emVmZmR3bGJqcWZ3bmszeXlndjltajBzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/17mNCcKU1mJlrbXodo/giphy.gif"
        />
      )}
      <ul>
        {countriesData?.map((country) => {
          return (
            <li
              key={`${country.name}-${country.languages[0].code}`}
              onClick={() => setSelectedCountryData(country)}
            >
              {country.name}
            </li>
          );
        })}
      </ul>
      {/* Highlight country on click and display card at the bottom */}
    </>
  );
}

export default CountryList;
