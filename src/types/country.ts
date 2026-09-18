export type CountryQuery = {
    countries: Country[];
}

export type Country = {
    capital: string;
    currency: string;
    emoji: string;
    languages: Language[];
    name: string;
}

export type Language = {
    code: string;
    name: string;
}

export type CountryCardProps = {
    selectedCountryData: Country;
}

export type CountryListProps = {
    setSelectedCountryData: Function,
    countriesData: Country[],
    loading: Boolean,
    errorMessage: string
}

export type SearchBarProps = {
    setCountriesData: Function,
    setCountriesLoadingState: Function,
    setCountriesErrorState: Function,
    setSelectedCountryData: Function
}