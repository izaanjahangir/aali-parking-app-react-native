const authActions = {};

authActions.setUser = payload => {
  return {
    type: 'SET_USER',
    payload,
  };
};

authActions.clearUser = () => {
  return {
    type: 'CLEAR_USER',
  };
};

module.exports = authActions;
