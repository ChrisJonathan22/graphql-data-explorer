import React from "react";
import { useQuery } from "@apollo/client/react";
import { TRACKS } from "../../graphql/queries/countries";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { type CountryQuery } from "../../types/country";

function CountryList() {
  const { loading, error, data } = useQuery<CountryQuery>(TRACKS);

  return (
    <>
      <h3>searchResults</h3>
      <p>Country name: {data?.country.name}</p>

      {error && <h3>There was an error {error.message} </h3>}

      {loading && (
        <img
          alt="Loading gif"
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJsaTBmaWNhNWtlMGd5emVmZmR3bGJqcWZ3bmszeXlndjltajBzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/17mNCcKU1mJlrbXodo/giphy.gif"
        />
      )}

      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Pagination count={10} shape="rounded" /> */}
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </>
  );
}

export default CountryList;
