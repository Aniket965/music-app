import React from 'react';
import { useStoreState } from 'easy-peasy';
import {Link} from "react-router-dom";
import flag from 'country-code-emoji';

function FavArtistList() {
    const favlist = useStoreState(state => state.favlist.artists);
    return favlist.map(artist => <div className="cursor-pointer font-bold hover:underline text-left">
        <Link to={`/artists/${artist.mbid}`} >  {artist.country? `${flag(artist.country)} ${artist.name}` : `🌎 ${artist.name} `}</Link></div>);
  }
  
function SideBar() {
    return (
        <div className="shadow h-screen w-64 top-0 hidden sticky md:block bg-white  p-5" >
            <h2 className="text-3xl text-left font-bold mb-4" >Favorites</h2>
            <FavArtistList />
        </div>
    );
}

export default SideBar;