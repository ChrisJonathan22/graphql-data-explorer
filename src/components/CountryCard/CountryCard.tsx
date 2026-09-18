import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { type CountryCardProps } from "../../types/country";

function CountryCard(props: CountryCardProps) {
  const { selectedCountryData } = props;

  return (
    <>
      <h3>Country Card</h3>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Card sx={{ minWidth: 275, border: "1px solid #ccc" }}>
          <CardContent sx={{ backgroundColor: "lightblue", color: "white" }}>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14, mb: 1.5 }}
            >
              <b>Country name:</b> {selectedCountryData?.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 1.5 }}>
              <b>Capital:</b> {selectedCountryData?.capital}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14, mb: 1.5 }}>
              <b>Flag:</b> {selectedCountryData?.emoji}
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14, mb: 1.5 }}
            >
              <b>Currency:</b> {selectedCountryData?.currency}
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              <b>Languages:</b>
              {selectedCountryData?.languages.map((language) => {
                return (
                  <span key={selectedCountryData?.name + language.name}>
                    <br /> {language.name}
                  </span>
                );
              })}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}

export default CountryCard;
