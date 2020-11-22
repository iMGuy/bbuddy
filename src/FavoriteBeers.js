import React, {useState, useEffect} from 'react';
import BeerTicket from './components/BeerTicketComp.js';
import { useSelector } from 'react-redux';

function FavoriteBeers() {

  const myFavorites = useSelector(state => state.myFavorites);    // user favorist list
  const [items, setItems] = useState ([]);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    fetchItems();
    fetchItems();
  },[query]);

  const fetchItems = async () => {

    const data = await fetch(
      `https://api.punkapi.com/v2/beers/${query}`
    );

    const item = await data.json();
   
    let newArr = items.concat(item);
    
    
    setItems(newArr);

  }

  return (
    <div className="container">
      <div className="title">
        <h1>My Favorites Beers</h1>
      </div>

      <section className="beer-cards">
        
        {items.map(item => (
         
          <BeerTicket 
            key   = {item.id}
            item  = {item} 
            page  = 'FavoriteBeers'
          />      
        ))}
      </section>
    </div>
  );
}

export default FavoriteBeers;