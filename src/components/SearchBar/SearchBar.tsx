import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useQuery } from "@apollo/client/react";
import { TRACKS } from "../../graphql/queries/countries";
import { type CountryQuery, type SearchBarProps } from "../../types/country";

function SearchBar(props: SearchBarProps) {
  // On input save search term
  let [searchTerm, setSearchTerm] = useState("F");
  let [inputValue, setInputValue] = useState("");

  const {
    setCountriesData,
    setCountriesLoadingState,
    setCountriesErrorState,
    setSelectedCountryData,
  } = props;

  // Run by default
  const { loading, error, data } = useQuery<CountryQuery>(TRACKS, {
    variables: { searchTerm: searchTerm },
  });

  setCountriesData(data?.countries);
  setCountriesLoadingState(loading);
  setCountriesErrorState(error);

  console.log("Search data: ", data?.countries);

  return (
    <>
      <h3>SearchBar</h3>
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Enter a search term..."
            variant="outlined"
            className="searchField"
            onChange={(e) => {
              return setInputValue(e.target.value);
            }}
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            setSearchTerm(inputValue);
            // Clear selected country data when a new search is performed
            setSelectedCountryData();
          }}
        >
          Search
        </Button>
      </Stack>
    </>
  );
}

export default SearchBar;
