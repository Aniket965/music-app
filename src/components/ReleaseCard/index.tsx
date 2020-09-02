import React from 'react';

function ReleaseCard({ title, imageUrl, id }) {
    return (
        <div className="my-3 px-3 w-full  sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 w-64">
            <div className="relative">
                <div className="h-48 w-48 lg:h-56 lg:w-56 xl:h-56 xl:w-xl rounded-lg mx-auto md:mx-0 md:mr-6 shadow-2xl ios-card"
                    style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : `url(https://picsum.photos/200?blur=100v=${id})` }}
                />
            </div>
            <div className="text-center" >
                <h2 className="text-md sm:text-xl text-gray-700 font-bold"> {title}</h2>
            </div>

        </div>
    );
}

export default ReleaseCard;