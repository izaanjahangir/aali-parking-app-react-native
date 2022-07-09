const initialState = {
  user: null,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload};
    case 'CLEAR_USER':
      return {...state, ...initialState};
    default:
      return state;
  }
};

export default counterReducer;
