import React from 'react';
import {TextInput} from 'react-native';

import colors from '../../config/colors';
import style from './style';

const OutlineInput = props => {
  return <TextInput placeholderTextColor={colors.WHITE} placeholder={props.placeholder} style={style.container} />;
};

OutlineInput.defaultProps = {
  placeholder: 'Enter',
};

export default OutlineInput;
