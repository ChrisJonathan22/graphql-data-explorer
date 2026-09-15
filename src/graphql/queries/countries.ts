// GraphQL queries

import Client from "../client";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";


export const TRACKS = gql`
    query {
    countries(filter: { name : {regex: "United"}}) {
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

// export const TRACKS = gql`
//     query {
//         country(code: "GB") {
//             name
//             capital
//             emoji
//             currency
//             languages {
//             code
//             name
//             }
//         }
//     }
// `;

const results = await Client.query({
    query: TRACKS
});


console.log("GraphQL results from countries.ts", JSON.stringify(results.data));