import React, { useState } from "react";

function CountryCard(props) {
    const { selectedCountryData } = props;
  
    console.log("Selected Country Data: ",selectedCountryData);

  return (
    <>
      <h3>Country Card</h3>
      <p>Selected Country: {selectedCountryData?.name}</p>
    </>
  );
}

export default CountryCard;
