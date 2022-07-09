const initialState = {
  type: '',
  message: '',
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE_BOX':
      return {...state, ...action.payload};
    case 'REMOVE_MESSAGE_BOX':
      return {...state, ...initialState};
    default:
      return state;
  }
};

export default counterReducer;
