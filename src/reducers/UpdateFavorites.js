// This action add and removes beers from the favorite page 
const UpdateFavorite = ( state = [], action) => {
  switch(action.type){
    case 'ADDTOFAVORITE':
      let addToArray = state.concat({id: action.payload.recored, starts:0});
      return state, addToArray
      
    case 'REMOVEFROMFAVORITE':
      let removeFromArray = []; 
      for (let i = 0; i < state.length; i++) {
        if (state[i].id !== action.payload.recored) {
            removeFromArray.push(state[i]);
        }
      }
      
      return removeFromArray;
      
    default:
      return state;
  }
}

export default UpdateFavorite;
