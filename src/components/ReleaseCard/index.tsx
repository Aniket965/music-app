import React from 'react';

function ReleaseCard({ title, imageUrl, id }) {
    return (
        <div className="my-3 px-3 w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 w-64">
            <div className="relative">
                <div className="h-64 w-64 rounded-lg mx-auto md:mx-0 md:mr-6 shadow-2xl ios-card"
                    style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : `url(https://picsum.photos/200?blur=100v=${id})` }}
                />
            </div>
            <div className="text-center" >
                <h2 className="text-xl font-bold"> {title}</h2>
            </div>

        </div>
    );
}

export default ReleaseCard;