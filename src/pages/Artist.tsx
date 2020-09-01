import React, { useState } from 'react';
import '../styles.css';
import { useQuery } from '@apollo/client';
import ArtistCard from '../components/ArtistCard';
import { queries } from '../queries';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";



function Artist() {

    let { id } = useParams();
    const { loading, error, data } = useQuery(queries.ARTIST);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div className="container">
            {id}
        </div>
    );
}

export default Artist;
