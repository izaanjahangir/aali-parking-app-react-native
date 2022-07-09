import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';

import messageBoxActions from '../redux/messageBox/action';
import ErrorBox from '../components/ErrorBox';
import SuccessBox from '../components/SuccessBox';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Drawer from './Drawer';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const messageBox = useSelector(state => state.messageBox);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({_route, _navigation}) => ({
            headerShown: false,
          })}
          initialRouteName="Login">
          {!user ? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          ) : (
            <>
              <Stack.Screen name="Drawer" component={Drawer} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <ErrorBox
        onDone={() => {
          dispatch(messageBoxActions.removeMessage());
        }}
        message={messageBox.type === 'error' && messageBox.message}
      />
      <SuccessBox
        onDone={() => {
          dispatch(messageBoxActions.removeMessage());
        }}
        message={messageBox.type === 'success' && messageBox.message}
      />
    </>
  );
};

export default Navigation;
