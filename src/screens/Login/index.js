import React, {useState} from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';

import Button from '../../components/Button';
import OutlineInput from '../../components/OutlineInput';
import style from './style';
import DefaultDP from '../../assets/default-dp.png';
import MapBackground from '../../components/MapBackground';
import ErrorBox from '../../components/ErrorBox';

const Login = props => {
  const [errorMessage, setErrorMessage] = useState('');
  const goToRegister = () => {
    props.navigation.navigate('Register');
  };

  const handleLogin = () => {
    setErrorMessage('This is a message');
    // props.navigation.navigate('Drawer');
  };

  return (
    <MapBackground>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <Image style={style.profilePicture} source={DefaultDP} />
          <Text style={style.heading}>Welcome Back</Text>
          <Text style={style.text}>Sign in to continue</Text>
          <View style={style.form}>
            <OutlineInput placeholder="Enter your email" />
            <OutlineInput placeholder="Enter your password" />
            <Button onPress={handleLogin} containerStyle={style.loginButton}>
              Login
            </Button>
            <Text onPress={goToRegister} style={style.registerLink}>
              Register here
            </Text>
          </View>
        </View>
      </ScrollView>
      <ErrorBox onDone={() => setErrorMessage('')} message={errorMessage} />
    </MapBackground>
  );
};

export default Login;
