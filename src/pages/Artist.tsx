import React from 'react';
import '../styles.css';
import { useQuery } from '@apollo/client';

import { ArtistLookup } from '../types'
import { queries } from '../queries';
import flag from 'country-code-emoji';
import { getName } from 'country-list';
import { useStoreState, useStoreActions } from 'easy-peasy';
import {
    Link,
    useParams
} from "react-router-dom";
import ReleaseCard from '../components/ReleaseCard';



function Artist() {

    let { id } = useParams();
    const { loading, error, data } = useQuery<ArtistLookup>(queries.ARTIST,
        {
            variables: { mbid: id }
        }
    );
    const country = data?.lookup.artist.country;
    const tc = data?.lookup.artist.releases.totalCount ?? 0;
    const favlist = useStoreState(state => state.favlist.artists);
    const addArtist = useStoreActions((actions: any) => actions.favlist.addArtist);
    const removeArtist = useStoreActions((actions: any) => actions.favlist.removeArtist);



    if (loading) return (
        <div className="w-full ml-4" >
            <div className="bg-purple-900 p-2 w-full text-white text-left text-md font-bold" >
                <Link to="/" ><span className="cursor-pointer">{`⬅ Home`}</span></Link>
            </div>
            <div>Loading...</div>
        </div>
    );
    if (error) return (
        <div className="w-full ml-4" >
            <div className="bg-purple-900 p-2 w-full text-white text-left text-md font-bold" >
                <Link to="/" ><span className="cursor-pointer">{`⬅ Home`}</span></Link>
            </div>
            <div>Error :(</div>
        </div>
    );

    return (
        <div className="w-full" >
            <div className="bg-purple-900 p-2 w-full text-white text-left text-md font-bold" >
                <Link to="/" ><span className="cursor-pointer">{`⬅ Home`}</span></Link>
            </div>
            <div className="bg-purple-700 h-48 w-full text-white" >
                <div
                    className="flex pl-12 pt-4"
                >
                    <div
                        className="h-64 w-64 rounded-full ios-card"
                        style={{
                            backgroundImage: data?.lookup.artist?.mediaWikiImages[0]?.url ? `url(${data?.lookup.artist?.mediaWikiImages[0]?.url})` : `url(https://picsum.photos/200?blur=100v=${id})`
                        }} />
                    <div className="text-left pl-4 font-bold">
                        <h2 className="text-6xl" >{data?.lookup.artist.name} <span className="cursor-pointer"
                            onClick={_ => {
                                if (favlist && favlist.find(x => x.mbid === id)) removeArtist({ mbid: id })
                                else addArtist({ name: data?.lookup.artist.name, mbid: id })
                            }}
                        > {favlist && favlist.find(x => x.mbid === id) ? "⭐️" : "☆"}</span> </h2>
                        <h2 className="text-lg" >{country ? `${flag(country)}  ${getName(country)}` : `🌎 WorldWide `}</h2>

                        {data?.lookup.artist.type === 'Person'
                            ? <h2 className="text-lg" >{data?.lookup.artist.gender === 'Male' ? '♂ Male' : '♀ Female'}</h2> :
                            <h2 className="text-lg" >{data?.lookup.artist.type}</h2>}

                    </div>
                </div>

            </div>
            <div className="my-32" >
                <h2 className="text-3xl text-left pl-12 font-bold" >{tc > 0 ? "Some of the Releases" : "No Releases Found :("}</h2>
                <div className="flex flex-wrap -mx-3 overflow-hidden">

                {data?.lookup.artist.releases.nodes
                .map(release => <ReleaseCard 
                title={release.title} 
                imageUrl={release.coverArtArchive.front}
                 id={release.id} />)}

                </div>
               
            </div>
        </div>
    );
}

export default Artist;
