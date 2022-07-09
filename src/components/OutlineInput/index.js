import React from 'react';
import {View, Text, TextInput} from 'react-native';

import colors from '../../config/colors';
import style from './style';

const OutlineInput = props => {
  return (
    <View style={style.container}>
      <TextInput
        value={props.value}
        onChangeText={props.onChange}
        placeholderTextColor={colors.WHITE}
        placeholder={props.placeholder}
        style={[style.input, !!props.errorMessage && style.errorInput]}
      />
      {!!props.errorMessage && (
        <Text style={style.errorMessage}>{props.errorMessage}</Text>
      )}
    </View>
  );
};

OutlineInput.defaultProps = {
  placeholder: 'Enter',
};

export default OutlineInput;
