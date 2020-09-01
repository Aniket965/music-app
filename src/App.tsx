import React from 'react';
import './App.css';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import client from './apolloclient';
import Home from './pages/Home';
import Artist from './pages/Artist';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div className="App flex justify-center relative">
      <ApolloProvider client={client}>
        <div className="h-screen fixed bg-gray-200 left-0 p-5" >
          <h2 className="text-3xl font-bold" >SIDEBAR</h2>
        </div>
        <Router> 
      <Switch>
          <Route path="/artists/:id">
           <Artist/>
          </Route>
          <Route path="/">
           <Home/>
          </Route>

        </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
