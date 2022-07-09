import React from 'react';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';

import Button from '../Button';
import CheckIcon from '../../assets/check.png';
import style from './style';

const SuccessBox = props => {
  const handlePress = () => {
    if (props.onDone) {
      props.onDone();
    }
  };

  return (
    <Modal animationIn={"bounceIn"} animationOut={"bounceOut"} isVisible={!!props.message}>
      <View style={style.container}>
        <View style={style.boxContainer}>
          <View style={style.successIconContainer}>
            <Image source={CheckIcon} style={style.successIcon} />
          </View>
          <View style={style.contentContainer}>
            <Text style={style.title}>Congo</Text>
            <Text style={style.message}>{props.message}</Text>
          </View>
          <Button onPress={handlePress} containerStyle={style.button}>
            Done
          </Button>
        </View>
      </View>
    </Modal>
  );
};

SuccessBox.defaultProps = {};

export default SuccessBox;
