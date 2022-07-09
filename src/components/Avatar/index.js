import React from 'react';
import {Image} from 'react-native';

import DefaultDp from '../../assets/default-dp.png';
import style from './style';

const Avatar = props => {
  return <Image source={DefaultDp} style={style.avatar} />;
};

Avatar.defaultProps = {};

export default Avatar;
