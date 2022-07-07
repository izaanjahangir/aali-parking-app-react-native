import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import Button from '../../components/Button';
import OutlineInput from '../../components/OutlineInput';
import style from './style';
import DefaultDP from '../../assets/default-dp.png';

const Register = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={style.container}>
        <Image style={style.profilePicture} source={DefaultDP} />
        <Text style={style.heading}>Welcome</Text>
        <Text style={style.text}>Register your account</Text>
        <View style={style.form}>
          <OutlineInput placeholder="Enter your first name" />
          <OutlineInput placeholder="Enter your last name" />
          <OutlineInput placeholder="Enter your NIC" />
          <OutlineInput placeholder="Enter your email" />
          <OutlineInput placeholder="Enter your password" />
          <OutlineInput placeholder="Enter your confirm password" />
          <Button containerStyle={style.loginButton}>Register</Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
