import React from 'react';
import {TextInput} from 'react-native';

import style from './style';

const OutlineInput = props => {
  return <TextInput placeholder={props.placeholder} style={style.container} />;
};

OutlineInput.defaultProps = {
  placeholder: 'Enter',
};

export default OutlineInput;
