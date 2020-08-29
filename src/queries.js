import { gql } from '@apollo/client';

const ARTISTS = gql`
query getArtists($query: String!) {
    search {
      artists(query: $query) {
        nodes {
          id
          name
        }
      }
    }
}
`;

export const queries = {
    ARTISTS
}