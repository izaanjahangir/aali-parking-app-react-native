import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import Button from '../../components/Button';
import OutlineInput from '../../components/OutlineInput';
import style from './style';
import DefaultDP from '../../assets/default-dp.png';

const Login = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={style.container}>
        <Image style={style.profilePicture} source={DefaultDP} />
        <Text style={style.heading}>Welcome Back</Text>
        <Text style={style.text}>Sign in to continue</Text>
        <View style={style.form}>
          <OutlineInput placeholder="Enter your email" />
          <OutlineInput placeholder="Enter your password" />
          <Button containerStyle={style.loginButton}>Login</Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
