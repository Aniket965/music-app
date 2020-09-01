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
query {
  lookup {
    artist(mbid:"9d7cac94-79ac-48e9-8be9-dcdcbb00e3df") {
      name,
      country,
      type,
      gender,
      fanArt {
        banners {
          url
        }
        thumbnails {
          url
        }
      }
        releases {
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