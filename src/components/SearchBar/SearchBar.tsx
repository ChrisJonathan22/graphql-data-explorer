import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useQuery } from "@apollo/client/react";
import { TRACKS } from "../../graphql/queries/countries";
import { type CountryQuery } from "../../types/country";

function SearchBar(props) {
  // On input save search term
  let [searchTerm, setSearchTerm] = useState("");
  let [inputValue, setInputValue] = useState("");

  const { setCountriesData, setCountriesLoadingState, setCountriesErrorState } =
    props;

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
        <Button variant="contained" onClick={() => setSearchTerm(inputValue)}>
          Search
        </Button>
      </Stack>
    </>
  );
}

export default SearchBar;
