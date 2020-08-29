import React from 'react';
import './index.css';


function ArtistCard({name}) {
  return (
    <div className="artist-card">
        {name}
    </div>
  );
}

export default ArtistCard;
