import React from 'react';
import {Text} from 'react-native';
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
    <Ripple onPress={handlePress} style={[style.container, props.containerStyle]}>
      <Text style={[style.text, props.textStyle]}>{props.children}</Text>
    </Ripple>
  );
};

Button.defaultProps = {
  placeholder: 'Enter',
};

export default Button;
