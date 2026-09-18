import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { type CountryListProps } from "../../types/country";

function CountryList(props: CountryListProps) {
  const { setSelectedCountryData, countriesData, loading, errorMessage } =
    props;

  return (
    <>
      <h3>Search Results</h3>
      {errorMessage && <h3>There was an error {errorMessage} </h3>}

      {loading && (
        <img
          style={{ width: "50%", margin: "0 auto" }}
          alt="Loading gif"
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGJsaTBmaWNhNWtlMGd5emVmZmR3bGJqcWZ3bmszeXlndjltajBzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/17mNCcKU1mJlrbXodo/giphy.gif"
        />
      )}

      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "50%",
            maxWidth: 360,
            bgcolor: "background.paper",
            border: "1px black solid",
          }}
        >
          {countriesData?.map((country) => {
            return (
              <List>
                <ListItem
                  disablePadding
                  key={`${country.name}-${country.languages[0].code}`}
                  onClick={() => setSelectedCountryData(country)}
                >
                  <ListItemButton>
                    <ListItemText primary={country.name} />
                  </ListItemButton>
                </ListItem>
              </List>
            );
          })}
        </Box>
      </Stack>
    </>
  );
}

export default CountryList;
