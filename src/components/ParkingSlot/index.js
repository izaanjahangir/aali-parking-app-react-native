import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import style from './style';

const ParkingSlot = props => {
  const handlePress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };

  return (
    <TouchableOpacity disabled={props.disabled} onPress={handlePress}>
      <View
        style={[
          style.container,
          props.selected && style.containerSelected,
          props.reserved && style.containerReserved,
        ]}>
        <Text style={style.slotText}>{props.children}</Text>
        {props.selected && <Text style={style.selectedText}>Selected</Text>}
        {props.reserved && <Text style={style.selectedText}>Reserved</Text>}
      </View>
    </TouchableOpacity>
  );
};

ParkingSlot.defaultProps = {};

export default ParkingSlot;
