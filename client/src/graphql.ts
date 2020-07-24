import { gql } from "@apollo/client";

export const getTasks = gql`
    query getTasks {
        tasks {
            description
            type
        }
    }
`;