import {combineReducers} from 'redux';
import IsTicketFavorite from './IsTicketFavorite.js';
import UpdateFavorite from './UpdateFavorites.js';

const allReducers = combineReducers ({
  myFavorites: UpdateFavorite,
  upfev: IsTicketFavorite
});

export default allReducers;

