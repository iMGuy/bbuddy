import React from 'react';
import Popup from 'reactjs-popup';

const BeerDetailComp = ({ id, item, page }) => {
  return(
    <Popup
      trigger={<button className="button-info"> <i className="fas fa-info"></i></button>}
        modal
        nested
      >
      {close => (
        <div className="modal">
         <button className="close" onClick={close}>
            &times;
            </button>
            <div className="header"> {item.name} Beer </div>
              <div className="tagline">{item.tagline}</div>
              <div className="content">
                {' '}
                <p>{item.description}</p>
                <p><span className="popup-subtitles">Brewers Tips:</span><br/>{item.brewers_tips}</p>
                <p><span className="popup-subtitles">Food Pairing: <br/></span>{item.food_pairing}</p>
                <p><span className="popup-subtitles">First Brewed: </span>{item.first_brewed}</p>
                <p><span className="popup-subtitles">ph: </span> {item.ph} </p>
              </div>
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                  console.log('modal closed ');
                  close();
                }}>
                  Close details popup
                </button>
              </div>
        </div>
        )}
    </Popup>
  )
}

export default BeerDetailComp;