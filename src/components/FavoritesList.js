import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const FavoritesList = ({id, item, page }) => {

    const myFavorites = useSelector(state => state.myFavorites);    // user favorist list   
    const list = [];                                                // the array thats holds the Favorites list iteams

    const fetchItem = async (query) => {
      const data = await fetch(
        `https://api.punkapi.com/v2/beers$`+query
      );
  
      const item = await data.json();
      
      list.push(item);
  
    }

    const favoritesList = () => {

        myFavorites.map(itemId => (

            fetchItem(itemId.id);

        )
    }

    return list;

}

export default FavoritesList;