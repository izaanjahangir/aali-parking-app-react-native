import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

import authActions from '../../redux/auth/action';
import messageBoxActions from '../../redux/messageBox/action';
import Button from '../Button';
import Avatar from '../Avatar';
import style from './style';

const Drawer = props => {
  const dispatch = useDispatch();
  const logout = () => {
    auth().signOut();
    dispatch(authActions.clearUser());
    dispatch(
      messageBoxActions.setMessage({type: 'success', message: 'See you soon'}),
    );
  };

  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <Avatar />
        <Text style={style.welcomeText}>Welcome izaan</Text>
        <Text style={style.emailText}>izaanjahangir2@gmail.com</Text>
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
