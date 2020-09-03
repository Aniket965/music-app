import { gql } from '@apollo/client';

const ARTISTS = gql`
query getArtists($query: String!,$first: Int!, $cursor: String!) {
    search {
      artists(query: $query,first:$first,after: $cursor) {
        nodes {
          id
          mbid
          name,
          country,
          mediaWikiImages {
            url
          }  
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
}
`;

const ARTIST = gql`
query getArtist($mbid: MBID!) {
  lookup {
    artist(mbid:$mbid) {
      mbid
      name,
      country,
      type,
      gender,
      mediaWikiImages {
        url
      }
        releases(first:5) {
                    totalCount,
                    nodes {
                      
                      id,
                      mbid,
                      title,
                      date,
                      country
                      coverArtArchive 
                    {
                      front,
                      artwork
                  
                    }
                    }
                  }
      
    }
  }
  
}
`;

export const queries = {
  ARTISTS,
  ARTIST
}