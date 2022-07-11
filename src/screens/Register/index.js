import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';

import messageBoxActions from '../../redux/messageBox/action';
import MapBackground from '../../components/MapBackground';
import Button from '../../components/Button';
import OutlineInput from '../../components/OutlineInput';
import style from './style';
import DefaultDP from '../../assets/default-dp.png';

const Register = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nic, setNIC] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const dispatch = useDispatch();

  const goToLogin = () => {
    props.navigation.goBack();
  };

  const handleTextChange = (text, updateFunction) => {
    updateFunction(text);
  };

  const validate = () => {
    const errors = {};

    if (!firstName) {
      errors.firstName = 'This field is required';
    }
    if (!lastName) {
      errors.lastName = 'This field is required';
    }
    if (!email) {
      errors.email = 'This field is required';
    }
    if (!password) {
      errors.password = 'This field is required';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'This field is required';
    }
    if (!nic) {
      errors.nic = 'This field is required';
    }

    if (password && confirmPassword && password !== confirmPassword) {
      errors.password = 'Both passwords should match';
      errors.confirmPassword = 'Both passwords should match';
    }

    setValidationErrors(errors);

    return !Object.keys(errors).length;
  };

  const handleRegister = async () => {
    try {
      if (!validate()) {
        throw new Error('Please fix all errors');
      }

      setLoading(true);

      const newUser = {
        firstName,
        lastName,
        email,
        nic,
      };
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await firestore()
        .collection('users')
        .doc(response.user.uid)
        .set(newUser, {merge: true});

      goToLogin();
      dispatch(
        messageBoxActions.setMessage({
          type: 'success',
          message: 'Registeration is successful. You can login now',
        }),
      );
    } catch (e) {
      dispatch(
        messageBoxActions.setMessage({type: 'error', message: e.message}),
      );
    }

    setLoading(false);
  };

  return (
    <MapBackground>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <Image style={style.profilePicture} source={DefaultDP} />
          <Text style={style.heading}>Welcome</Text>
          <Text style={style.text}>Register your account</Text>
          <View style={style.form}>
            <OutlineInput
              errorMessage={validationErrors.firstName}
              value={firstName}
              onChange={e => handleTextChange(e, setFirstName)}
              placeholder="Enter your first name"
            />
            <OutlineInput
              errorMessage={validationErrors.lastName}
              value={lastName}
              onChange={e => handleTextChange(e, setLastName)}
              placeholder="Enter your last name"
            />
            <OutlineInput
              errorMessage={validationErrors.nic}
              value={nic}
              onChange={e => handleTextChange(e, setNIC)}
              placeholder="Enter your NIC"
            />
            <OutlineInput
              errorMessage={validationErrors.email}
              value={email}
              onChange={e => handleTextChange(e, setEmail)}
              placeholder="Enter your email"
            />
            <OutlineInput
              secureTextEntry={true}
              errorMessage={validationErrors.password}
              value={password}
              onChange={e => handleTextChange(e, setPassword)}
              placeholder="Enter your password"
            />
            <OutlineInput
              secureTextEntry={true}
              errorMessage={validationErrors.confirmPassword}
              value={confirmPassword}
              onChange={e => handleTextChange(e, setConfirmPassword)}
              placeholder="Enter your confirm password"
            />
            <Button
              onPress={handleRegister}
              loading={loading}
              containerStyle={style.loginButton}>
              Register
            </Button>
            <Text onPress={goToLogin} style={style.loginLink}>
              Already have an account?
            </Text>
          </View>
        </View>
      </ScrollView>
    </MapBackground>
  );
};

export default Register;
