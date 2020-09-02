import { gql } from '@apollo/client';

const ARTISTS = gql`
query getArtists($query: String!) {
    search {
      artists(query: $query) {
        nodes {
          id
          mbid
          name,
          country,
          mediaWikiImages {
            url
          }  
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
                      back,
                      artwork
                      images {
                        thumbnails {small,large}
                      }
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