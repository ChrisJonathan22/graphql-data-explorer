import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function SearchBar() {
  let [country, setCountry] = useState("");

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
          />
        </Box>
        <Button variant="contained">Search</Button>
      </Stack>
    </>
  );
}

export default SearchBar;
