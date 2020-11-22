import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import { useSelector, useDispatch } from 'react-redux';
import { AddToFavorite,RemoveFromFavorite } from '../actions';
 
const FavoriteComp = (id) => {
    
    const myFavorites = useSelector(state => state.myFavorites);    // user favorist list
    const dispatch = useDispatch();
    const ticketStatus = [];                                        // ticket status is/not in favorites.
    
    const addBeerToFavorites = (id) => { 

        let counter = 0;

        // check if id exist before adding to favorites
        for (let i = 0; i < myFavorites.length; i++) {
            if (myFavorites[i].id == id) {
                counter += 1;
                console.log('dddd-')
            }
        }
        
        if (counter == 0) {
            dispatch(AddToFavorite(id));
        }
    }

    // Update favorite behvior and design if beer if in myFavorites list
    const CheckFavStat = () => {
        
        // Content for popup if ticket was just added to favorites 
        let favClass = 'favorites-button';
        let favPopupHeader = "Beer Added seccefully";
        let favPopupContent = "The beer was added to your favorits list, click on \"Favorite Beers\" on the top Nav to see full list.";
        let actionButtonPopup = "actions hidebutton";
        
        // Content for popup if ticket is on its way to be removed from favorites 
        for (let i = 0; i < myFavorites.length; i++) {
            if (myFavorites[i].id === id.beerId) {
                console.log(myFavorites[i].id + '  ' + id.beerId)
                favClass = 'favorites-button favorites-button-on';
                favPopupHeader = "Remove From Favorites";
                favPopupContent = "Are you sure you want removing this beer from your favorie list, lets think on it while drinking a beer?";
                actionButtonPopup = "actions";
            } 
        }

        ticketStatus.push(
            favClass,
            favPopupHeader,
            favPopupContent,
            actionButtonPopup,
        );
        return ticketStatus[0];
    }

    return(
        
        <Popup
            trigger={
            <button className={CheckFavStat()} >
                <a onClick={() => {addBeerToFavorites(id.beerId);}}><i className="fas fa-heart"></i></a>
            </button>}
            modal
            nested
            >
            {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                &times;
                </button>
                <div className="header">{ticketStatus[1]}</div>
                    <div className="content">
                        {ticketStatus[2]}
                    </div>
                    <div className={ticketStatus[3]}>
                        
                        <button
                            className="button"
                            onClick={() => {
                            console.log('modal closed ');
                            close();
                        }}>
                            Lets keep it
                        </button>
                        <button
                            className="button"
                            onClick={() => {
                            close();
                            dispatch(RemoveFromFavorite(id.beerId));
                        }}>
                            Yes, Im sure!
                        </button>  
                    </div>
            </div>
            )}
        </Popup>
    )
}


export default FavoriteComp;