const initialState = {
  slots: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SLOTS':
      return {...state, slots: action.payload};
    default:
      return state;
  }
};
