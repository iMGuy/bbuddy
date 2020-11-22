import React, {useState, useEffect} from 'react';
import BeerTicket from './components/BeerTicketComp.js';

function BrowseBeers() {

  const [items, setItems] = useState ([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    fetchItems();
  },[query]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://api.punkapi.com/v2/beers${query}`
    );

    const items = await data.json();
    setItems(items);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    if (Object.keys(search).length === 0) {
      setQuery("");
    } else {
      setQuery("?food=" + search.replace(' ', '_'));
    }
  }

  return (
    <div className="container">
      <div className="title">
        <h1>The Beer  Buddy Collection</h1>
      </div>
      <section className="search-row">
        <form onSubmit={getSearch} className="search-form" >
          <input 
            className="search-input" 
            type="text" 
            value={search} 
            onChange={updateSearch} 
          />
          <button className="Search-butten" type="submit">Search</button>
          
        </form>
      </section>
      <section className="beer-cards">
        
        {items.map(item => (
          <BeerTicket 
            key   = {item.id}
            item  = {item} 
          />      
        ))}
      </section>
    </div>
  );
}

export default BrowseBeers;