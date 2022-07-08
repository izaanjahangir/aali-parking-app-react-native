import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../config/colors';
import style from './style';

const ParkingSlot = props => {
  return (
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
  );
};

ParkingSlot.defaultProps = {};

export default ParkingSlot;
