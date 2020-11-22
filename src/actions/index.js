export const AddToFavorite = (recored) => {
  return {
    type: 'ADDTOFAVORITE',
    payload: { recored }
  };
};

export const RemoveFromFavorite = (recored) => {
  return {
    type: 'REMOVEFROMFAVORITE',
    payload: { recored }
  };
};

export const IsFavorite = (recored) => {
  return {
    type: 'ISFAVORITE',
    payload: { recored }
  };
};
  