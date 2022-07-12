import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

import authActions from '../../redux/auth/action';
import messageBoxActions from '../../redux/messageBox/action';
import Button from '../Button';
import Avatar from '../Avatar';
import style from './style';

const Drawer = props => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.auth.user);
  const logout = () => {
    auth().signOut();
    dispatch(authActions.clearUser());
    dispatch(
      messageBoxActions.setMessage({type: 'success', message: 'See you soon'}),
    );
  };

  console.log(user)
  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <Avatar />
        <Text style={style.welcomeText}>Welcome {user?.firstName}</Text>
        <Text style={style.emailText}>{user?.email}</Text>
      </View>
      <View style={style.bottomContainer}>
        <Button onPress={logout} containerStyle={style.logoutButton}>
          Logout
        </Button>
      </View>
    </View>
  );
};

Drawer.defaultProps = {};

export default Drawer;
