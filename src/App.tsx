import React, { useState } from 'react';

import './App.css';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import { useQuery } from '@apollo/client';
import ArtistCard from './components/ArtistCard';
import client from './apolloclient';
import { queries } from './queries';


function ArtistsList({ query }) {
  const { loading, error, data } = useQuery(queries.ARTISTS, {
    variables: { query },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div className="flex flex-wrap -mx-3 overflow-hidden">
    {data?.search?.artists?.nodes.map(artist => {
    return <ArtistCard name={artist?.name} 
    imageUrl={artist?.mediaWikiImages[0]?.url} 
    key={artist?.id}
    country={artist?.country}
    />
  })}
  </div>
}

function App() {
  const [artistquery, setArtistQuery] = useState('Nirvana');

  return (
    <div className="App flex justify-center">
      <ApolloProvider client={client}>
        <div className="container">
        <div>
          <h1 className="text-6xl text-purple-600"> Search Artists by Name </h1>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Search Artists..." onChange={e => setArtistQuery(e.target.value)} />
        </div>
        <div style={{ marginTop: '2rem' }}  >
          {artistquery.length < 3 ? (<div> Looking for artists...</div>) : <ArtistsList query={artistquery} />}
        </div>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
