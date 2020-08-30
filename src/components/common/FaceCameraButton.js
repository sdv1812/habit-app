import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import Colors from '../../config/Colors';

const IconAdd = () => {
  return (
    <Icon
    type='octicon'
    name='plus-small'
    color={Colors.generalTextColor}
    />
  );
};

const FaceCameraButton = ({
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
    >
      <IconAdd />
    </TouchableOpacity>
  );
};


export { FaceCameraButton };
