import React from 'react';
import {ImageBackground, View} from 'react-native';

import MapImage from '../../assets/map.png';
import style from './style';

const MapBackground = props => {
  return (
    <View style={style.container}>
      <ImageBackground source={MapImage} style={style.background}>
        <View style={style.backdrop}></View>
      </ImageBackground>
      {props.children}
    </View>
  );
};

export default MapBackground;
