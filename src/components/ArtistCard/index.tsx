import React from 'react';
import './index.css';
import flag from 'country-code-emoji';
import {

  Link,
} from "react-router-dom";

function ArtistCard({name,imageUrl,country,id,mbid}) {
  return (
    <div className="my-3 px-3 w-full  sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 w-64">
      <div className="relative">
      <Link to={`/artists/${mbid}`}> 
      <div className="h-56 w-56 rounded-full mx-auto md:mx-0 md:mr-6 shadow-2xl ios-card"
         style={{backgroundImage: imageUrl ? `url(${imageUrl}),url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1cCk9nO_5jl4lpD0dw-zs-dLfpHCK0SLY4w&usqp=CAU)` : `url(https://picsum.photos/200?blur=100v=${id}),url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1cCk9nO_5jl4lpD0dw-zs-dLfpHCK0SLY4w&usqp=CAU)`}}
         />
         </Link>
      </div>
      
      <div className="text-center" >
      <Link to={`/artists/${mbid}`}> <h2 className="text-xl font-bold cursor-pointer hover:underline">
           {country? `${flag(country)} ${name}` : `🌎 ${name} `}</h2></Link>
       
      </div>
       
    </div>
  );
}

export default ArtistCard;