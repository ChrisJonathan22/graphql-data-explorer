// GraphQL queries

import { gql } from "@apollo/client";


// Configure the query with a variable
export const TRACKS = gql`
    query ($searchTerm: String) {
    countries(filter: { name : {regex: $searchTerm}}) {
        name
        capital
        emoji
        currency
        languages {
        code
        name
        }
    }
}
`;