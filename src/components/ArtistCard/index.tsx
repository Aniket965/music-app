import React from 'react';
import './index.css';
import flag from 'country-code-emoji';


function ArtistCard({name,imageUrl,country}) {
  return (
    <div className="my-3 px-3 w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 w-64">
      <div>
      <div className="h-56 w-56 rounded-full mx-auto md:mx-0 md:mr-6 shadow-2xl ios-card"
      style={{backgroundImage:`url(${imageUrl})`}}
         />
      </div>
      <div className="text-center" >
        <h2 className="text-xl font-bold cursor-pointer hover:underline">
           {country? `${flag(country)} ${name}` : `🌎 ${name} `}</h2>
      </div>
       
    </div>
  );
}

export default ArtistCard;