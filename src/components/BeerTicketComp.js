import React, { useEffect } from 'react';
import BeerDetailComp from './BeerDetailComp.js'
import FavoriteComp from './FavoriteComp.js'
import BeerRank from './BeerRankComp.js'
import { IsFavorite } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const BeerTicket = ({id, item, page }) => {

  const myFavorites = useSelector(state => state.myFavorites);    // user favorist list
  const dispatch = useDispatch(); 

  useEffect(() => {
    updateFav();
  },[]);
  
  let beerStars = '';

  // check if beer is in favorite and update upFev(Globle) if it is 
  const updateFav = () => {
    
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === item.id) {       
        dispatch(IsFavorite(myFavorites[i]));
        beerStars = myFavorites[i].stars;
        console.log(myFavorites[i].stars)
      } else {
        dispatch(IsFavorite([]));
        beerStars = 0;
      }
    }
  }
  
  return(
    <div className="beer-card">
      <div className="beer-card-title">
        {item.name ? <h3>{item.name} </h3> :''} 
      </div>
      <div className="beer-card-image">
        {item.image_url ? <img src={item.image_url} alt={item.tagline ? item.tagline :''} className="beer-image"/> :''}
      </div> 
      <div className="beer-card-action">
        <div className="add-to-favorites">
            <FavoriteComp beerId={item.id} />
        </div>
        {page ? 
        <div className="rank-beer">
          <BeerRank beerStars = {beerStars}/>
        </div> : ''}
        <div className="more-detailes">
          <BeerDetailComp 
            key   = {item.id}
            item  = {item} 
          />
        </div>
      </div>    
    </div>
  );
}

export default BeerTicket;