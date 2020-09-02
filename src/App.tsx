import React from 'react';
import './App.css';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import client from './apolloclient';
import Home from './pages/Home';
import Artist from './pages/Artist';
import { StoreProvider, useStoreState } from 'easy-peasy';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { store } from './store';


function FavArtistList() {
  const favlist = useStoreState(state => state.favlist.artists);
  return favlist.map(artist => <div className="cursor-pointer hover:underline"><Link to={`/artists/${artist.mbid}`} >{artist?.name}</Link></div>);
}


function App() {
  return (
    <div className="App flex relative">
      <ApolloProvider client={client}>
        <StoreProvider store={store} >
          <Router>

            <div className="h-screen w-64 top-0 sticky bg-gray-200  p-5" >
              <h2 className="text-3xl font-bold" >SIDEBAR</h2>
              <FavArtistList />
            </div>
            <div className="w-full overflow-x-hidden" >
              <Switch>
                <Route path="/artists/:id">
                  <Artist />
                </Route>
                <Route path="/">
                  <Home />
                </Route>

              </Switch>
            </div>
          </Router>
        </StoreProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
