import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MediumText } from './MediumText';
import Colors from '../../config/Colors';

const Button = ({ onPress, disabled, btnStyle, txtStyle, children, bold }) => {
  const { buttonStyle, textStyle, disabledBtnStyle } = styles;
  if (disabled) {
    return (
      <TouchableOpacity
        disabled
        onPress={onPress}
        style={[disabledBtnStyle, btnStyle]}
      >
        <MediumText
          bold={bold}
          color={`${Colors.btnTextColor}90`}
          style={[textStyle, txtStyle]}
        >
          {children}
        </MediumText>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle, btnStyle]}
    >
      <MediumText
        bold={bold}
        color={Colors.btnTextColor}
        style={[textStyle, txtStyle]}
      >
        {children}
      </MediumText>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    height: 45,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 7,
    marginLeft: 5,
    marginRight: 5
  },
  disabledBtnStyle: {
    height: 45,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.unSelectedBackgroundColor,
    borderRadius: 7,
    marginLeft: 5,
    marginRight: 5,
  }
};

export { Button };
