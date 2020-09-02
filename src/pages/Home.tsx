import React, { useState } from 'react';
import '../styles.css';
import { useQuery } from '@apollo/client';
import ArtistCard from '../components/ArtistCard';
import { queries } from '../queries';


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
                id={artist?.id}
                key={artist?.id}
                country={artist?.country}
                mbid={artist?.mbid}
            />
        })}
    </div>
}

function Home() {
    const [artistquery, setArtistQuery] = useState('Nirvana');
    return (
        <div className="w-full flex justify-center">
        <div className="container p-6">
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
        </div>
    );
}

export default Home;
