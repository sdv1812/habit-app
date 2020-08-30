import React from 'react';
import { View } from 'react-native';

const Card = ({ children, style }) => {
  return (
    <View style={[styles.containerStyle, style]}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  }
};

export { Card };
