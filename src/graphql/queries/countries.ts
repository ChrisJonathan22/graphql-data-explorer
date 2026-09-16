// GraphQL queries

import Client from "../client";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";


// Configure the query with a variable
export const TRACKS = gql`
    query ($searchTerm: String = "Japan") {
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


// const results = await Client.query({
//     query: TRACKS
// });


// console.log("GraphQL results from countries.ts", JSON.stringify(results.data));