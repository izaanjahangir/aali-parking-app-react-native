import React from 'react';
import {View, Text} from 'react-native';

import Button from '../Button';
import Avatar from '../Avatar';
import style from './style';

const Drawer = props => {
  const logout = () => {
    props.navigation.navigate('Login');
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
