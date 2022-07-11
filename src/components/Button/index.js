import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import Ripple from 'react-native-material-ripple';

import colors from '../../config/colors';
import style from './style';

const Button = props => {
  const handlePress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };

  return (
    <Ripple
      onPress={handlePress}
      style={[
        style.container,
        props.containerStyle,
        props.disabled && {opacity: 0.2},
      ]}>
      {props.loading ? (
        <ActivityIndicator size={25} color={colors.WHITE} />
      ) : (
        <Text style={[style.text, props.textStyle]}>{props.children}</Text>
      )}
    </Ripple>
  );
};

Button.defaultProps = {
  placeholder: 'Enter',
};

export default Button;
