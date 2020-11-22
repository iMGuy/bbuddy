// This action update the id and stars rank of iteams added to favorits
const IsTicketFavorite = ( state = [], action) => {
    switch(action.type){
      case 'ISFAVORITE':  
        
        return [{id: action.payload.recored.id, starts:action.payload.recored.stars}];
        
      default:
        return [0];
    }
  }
  
  export default IsTicketFavorite;