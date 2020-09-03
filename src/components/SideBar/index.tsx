import React from 'react';
import { useStoreState } from 'easy-peasy';
import {Link} from "react-router-dom";
import flag from 'country-code-emoji';

function FavArtistList() {
    const favlist = useStoreState(state => state.favlist.artists);
    if(favlist && favlist.length === 0) {
        return <div className="text-left text-gray-600" >Star Your ❤ Favorites to fill the list.</div>;
    }
    return favlist.map(artist => <div className="cursor-pointer font-bold hover:underline hover:text-purple-700 text-left">
        <Link to={`/artists/${artist.mbid}`} >  {artist.country? `${flag(artist.country)} ${artist.name}` : `🌎 ${artist.name} `}</Link></div>);
  }
  
function SideBar() {
    return (
        <div className="border-t-4 border-purple-700 rounded-b shadow sm:h-screen w-full overflow-y-scroll sm:w-64 top-0  static md:sticky md:block bg-white p-4" >
            <h2 className="text-3xl text-left font-bold mb-4" ><span className="text-purple-700" ></span> Favorites</h2>
            <FavArtistList />
        </div>
    );
}

export default SideBar;