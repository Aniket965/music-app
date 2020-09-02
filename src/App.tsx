import React, { useEffect, useState } from 'react';
import './App.css';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import client from './apolloclient';
import Home from './pages/Home';
import Artist from './pages/Artist';
import { createStore,StoreProvider, useStoreState,action } from 'easy-peasy';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function FavArtistList() {
  const favlist = useStoreState(state => state.favlist.artists);
  return favlist.map(artist => <div>{artist?.name}</div>);
}


function App() {
  
  const artistModel = {
    artists: [],
    addArtist: action((state:any, payload) => {
      if(!state.artists.find(x => x.mbid === payload.mbid))
        state.artists.push(payload);
    }),
    removeArtist: action((state:any, payload) => {
      state.artists = state.artists.filter(artist => artist.mbid !== payload.mbid)
    })
  };

  const storeModel = {
    favlist: artistModel,
  };
  const store = createStore(storeModel);


  return (
    <div className="App flex justify-center relative">
      <ApolloProvider client={client}>
        <StoreProvider store={store} >
        <div className="block h-screen bg-gray-200 left-0 p-5" >
          <h2 className="text-3xl font-bold" >SIDEBAR</h2>
          <FavArtistList />

        </div>
        <Router>
          <Switch>
            <Route path="/artists/:id">
              <Artist />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
        </StoreProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
