import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, color, style }) => {
  return (
    <View style={[styles.spinnerStyle, style]}>
      <ActivityIndicator
        size={size || 'small'}
        color={color || '#47525E'}
      />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
