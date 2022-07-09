const messageBoxActions = {};

messageBoxActions.setMessage = payload => {
  return {
    type: 'SET_MESSAGE_BOX',
    payload,
  };
};

messageBoxActions.removeMessage = () => {
  return {
    type: 'REMOVE_MESSAGE_BOX',
  };
};

module.exports = messageBoxActions;
