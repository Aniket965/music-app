import { createStore,action } from 'easy-peasy';
import { Artist } from './types';
 
const artistModel = {
    artists: JSON.parse((localStorage.getItem('favlist') ?? `[]`)),
    addArtist: action((state:any, payload) => {
      if(!state.artists.find( (x:Artist) => x.mbid === payload.mbid)) {
          state.artists.push(payload);
          localStorage.setItem('favlist',JSON.stringify(state.artists));
      }
    }),
    removeArtist: action((state:any, payload) => {
      localStorage.setItem('favlist',JSON.stringify(state.artists.filter((artist:Artist) => artist.mbid !== payload.mbid)))
      state.artists = state.artists.filter((artist:Artist) => artist.mbid !== payload.mbid)
    })
  };

  const storeModel = {
    favlist: artistModel,
  };
export const store = createStore(storeModel);