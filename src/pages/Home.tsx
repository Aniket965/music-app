import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';
import { useLazyQuery } from '@apollo/client';
import ArtistCard from '../components/ArtistCard';
import { queries } from '../queries';
import { useDebounce } from '../utilites/debounce';
import Loader from '../components/Loader';


function ArtistsList({ query }) {
    const SEARCH_DEBOUNCE_TIMEOUT = 500;
    const debounceSearch = useDebounce(query, SEARCH_DEBOUNCE_TIMEOUT);
    const [pageInfo, setPageInfo] = useState({ hasNextPage: true, endCursor: '' });
    const [artists, setArtists] = useState<any>([]);
    const [loadMore, { loading, error, data }] = useLazyQuery(queries.ARTISTS, {
        variables: { query: debounceSearch, cursor: "" ,first:9},
        onCompleted: (d) => {
            let arr = artists.concat(d?.search?.artists?.nodes)
            setArtists(arr)
            setPageInfo(d?.search?.artists?.pageInfo);
        }
    });
    const pageInfoRef = useRef<any>(pageInfo);

    const observer = useRef(new IntersectionObserver((entires) => {
        const first = entires[0];
        const info = pageInfoRef.current;
        if (first.isIntersecting && info.hasNextPage) {
            loadMore({ variables: { query: debounceSearch, cursor: info.endCursor,first:6 } })
        }
    }, { threshold: 1 }));

    const [loadingElement, setLoadingElement] = useState<any>(null);

    useEffect(() => {
        pageInfoRef.current = pageInfo;
    }, [pageInfo])
    useEffect(() => {
        setArtists([])
        loadMore({ variables: { query: debounceSearch, cursor: '', first:9 } })
    }, [debounceSearch])

    useEffect(() => {
        const currentEle = loadingElement;
        const currentObserver = observer.current;
        if (currentEle) {
            currentObserver.observe(currentEle);
        }
        return () => {
            if (currentEle) {
                currentObserver.unobserve(currentEle);
            }
        }
    }, [loadingElement])

    if (error) return <p>Error :(</p>;

    return <div> <div className="flex flex-wrap -mx-3 overflow-hidden">
        {artists.map(artist => {
            return <ArtistCard name={artist?.name}
                imageUrl={artist?.mediaWikiImages[0]?.url}
                id={artist?.id}
                key={artist?.id}
                country={artist?.country}
                mbid={artist?.mbid}
            />
        })}
    </div>

        {loading && (<Loader/>)}
        {data?.search?.artists?.pageInfo.hasNextPage &&
        !loading && (<div ref={setLoadingElement} className="text-center" >Loding more...</div>)}

    </div>
}



function Home() {

    const [artistquery, setArtistQuery] = useState('');


    return (
        <div className="w-full">
               <div className="bg-black p-12  flex justify-center" >
                        <img className="h-24 sm:h-36 lg:h-48"  src={require('../assets/logoscfinder.png')} alt=""/>
                    </div>
                    <div className="w-full flex justify-center">
            <div className="container p-6">
                <div>               
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Search Artists..." onChange={e => setArtistQuery(e.target.value.trim())} />
                </div>
                <div style={{ marginTop: '2rem' }}  >
                    {artistquery.length < 1 ? (<div> Find Your Artist by Searching thier Name</div>) : <ArtistsList query={artistquery} />}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Home;
