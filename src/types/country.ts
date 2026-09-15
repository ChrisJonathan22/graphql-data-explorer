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