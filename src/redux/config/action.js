import firestore from '@react-native-firebase/firestore';

const configActions = {};

configActions.fetchSlots = () => {
  return dispatch => {
    firestore()
      .collection('slots')
      .orderBy("code")
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(item => {
          return {
            id: item.id,
            ...item.data(),
          };
        });

        dispatch({type: 'SET_SLOTS', payload: data});
      });
  };
};

export default configActions;
