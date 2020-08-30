import React from 'react';
import { View } from 'react-native';
import { SmallText } from './SmallText';
import Colors from '../../config/Colors';

const Tag = ({ containerStyle, textStyle, bold, children }) => {
  return (
    <View style={[style.containerStyle, containerStyle]}>
      <SmallText
        style={textStyle}
        bold={bold || false}
      >
        {children}
      </SmallText>
    </View>
  );
};

const style = {
  containerStyle: {
    backgroundColor: Colors.tagColor,
    borderRadius: 5,
    padding: 5,
    margin: 2,
  }
};

export { Tag };
