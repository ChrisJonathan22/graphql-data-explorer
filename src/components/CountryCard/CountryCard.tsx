import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { type CountryCardProps } from "../../types/country";

function CountryCard(props: CountryCardProps) {
  const { selectedCountryData } = props;

  console.log("Selected Country Data: ", selectedCountryData);

  return (
    <>
      <h3>Country Card</h3>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14, mb: 1.5 }}
          >
            Country name: {selectedCountryData?.name}
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 1.5 }}>
            Capital: {selectedCountryData?.capital}
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 1.5 }}>
            Flag: {selectedCountryData?.emoji}
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14, mb: 1.5 }}
          >
            Currency: {selectedCountryData?.currency}
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Languages:{" "}
            {selectedCountryData?.languages.map((language) => {
              return (
                <span key={selectedCountryData?.name + language.name}>
                  <br /> {language.name} <br />
                </span>
              );
            })}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default CountryCard;
