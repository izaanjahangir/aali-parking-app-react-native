import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import messageBoxActions from '../../redux/messageBox/action';
import authActions from '../../redux/auth/action';
import Button from '../../components/Button';
import OutlineInput from '../../components/OutlineInput';
import style from './style';
import DefaultDP from '../../assets/default-dp.png';
import MapBackground from '../../components/MapBackground';

const Login = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState('');
  const [loading, setLoading] = useState('');

  const goToRegister = () => {
    props.navigation.navigate('Register');
  };

  const validate = () => {
    const errors = {};

    if (!email) {
      errors.email = 'This field is required';
    }
    if (!password) {
      errors.password = 'This field is required';
    }

    setValidationErrors(errors);

    return !Object.keys(errors).length;
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (!validate()) {
        throw new Error('Please fix errors');
      }

      const response = await auth().signInWithEmailAndPassword(email, password);
      const user = await firestore()
        .collection('users')
        .doc(response.user.uid)
        .get();

      dispatch(authActions.setUser({id: user.id, ...user.data()}));
      dispatch(
        messageBoxActions.setMessage({type: 'success', message: 'Success'}),
      );
    } catch (e) {
      dispatch(
        messageBoxActions.setMessage({type: 'error', message: e.message}),
      );
    }

    setLoading(false);
  };

  const handleTextChange = (text, updateFunction) => {
    updateFunction(text);
  };

  return (
    <MapBackground>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <Image style={style.profilePicture} source={DefaultDP} />
          <Text style={style.heading}>Welcome Back</Text>
          <Text style={style.text}>Sign in to continue</Text>
          <View style={style.form}>
            <OutlineInput
              value={email}
              onChange={e => handleTextChange(e, setEmail)}
              errorMessage={validationErrors.email}
              placeholder="Enter your email"
            />
            <OutlineInput
              value={password}
              errorMessage={validationErrors.password}
              onChange={e => handleTextChange(e, setPassword)}
              placeholder="Enter your password"
            />
            <Button
              loading={loading}
              onPress={handleLogin}
              containerStyle={style.loginButton}>
              Login
            </Button>
            <Text onPress={goToRegister} style={style.registerLink}>
              Register here
            </Text>
          </View>
        </View>
      </ScrollView>
    </MapBackground>
  );
};

export default Login;
