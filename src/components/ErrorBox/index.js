import React from 'react';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';

import Button from '../Button';
import DeleteIcon from '../../assets/delete.png';
import style from './style';

const ErrorBox = props => {
  const handlePress = () => {
    if (props.onDone) {
      props.onDone();
    }
  };

  return (
    <Modal animationIn={"bounceIn"} animationOut={"bounceOut"} isVisible={!!props.message}>
      <View style={style.container}>
        <View style={style.boxContainer}>
          <View style={style.deleteIconContainer}>
            <Image source={DeleteIcon} style={style.deleteIcon} />
          </View>
          <View style={style.contentContainer}>
            <Text style={style.title}>Oops!</Text>
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

ErrorBox.defaultProps = {};

export default ErrorBox;
