import React, { useState } from 'react';

import './App.css';

import { ApolloProvider } from '@apollo/client';
import { useQuery } from '@apollo/client';
import ArtistCard from './components/ArtistCard';
import client from './apolloclient';
import {queries} from './queries';


function ArtistsList({ query }) {
  const { loading, error, data } = useQuery(queries.ARTISTS, {
    variables: { query },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data?.search?.artists?.nodes.map(artist => {
    return <ArtistCard name={artist?.name} />
  })
}

function App() {
  const [artistquery, setArtistQuery] = useState('');

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h1> Search Artists by Name </h1>
        <input type="text" placeholder="Search Artists..." onChange={e => setArtistQuery(e.target.value)} />
        <div style={{ marginTop: '2rem' }}>
          {artistquery.length < 3 ? (<div> Looking for artists...</div>) : <ArtistsList query={artistquery} />}
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
