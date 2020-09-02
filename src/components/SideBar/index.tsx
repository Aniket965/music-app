import React from 'react';
import { useStoreState } from 'easy-peasy';
import {Link} from "react-router-dom";

function FavArtistList() {
    const favlist = useStoreState(state => state.favlist.artists);
    return favlist.map(artist => <div className="cursor-pointer hover:underline text-left"><Link to={`/artists/${artist.mbid}`} >{artist?.name}</Link></div>);
  }
  
function SideBar() {
    return (
        <div className="h-screen w-64 top-0 hidden sticky md:block bg-gray-200  p-5" >
            <h2 className="text-3xl font-bold mb-4" >Favorites</h2>
            <FavArtistList />
        </div>
    );
}

export default SideBar;