import React from 'react';
import './App.css';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import client from './apolloclient';
import Home from './pages/Home';
import Artist from './pages/Artist';
import { StoreProvider } from 'easy-peasy';
import { store } from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SideBar from './components/SideBar';



function App() {
  return (
    <div className="App flex relative">
      <ApolloProvider client={client}>
        <StoreProvider store={store} >
          <Router>
            <SideBar />
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
