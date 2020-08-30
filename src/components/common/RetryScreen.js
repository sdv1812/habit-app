import React from 'react';
import {
  View,
} from 'react-native';
import { Button } from './Button';
import { MediumText } from './MediumText';
import i18n from '../../translations/i18n';

const RetryScreen = ({ errorText, onPressRetry }) => {
  const { buttonStyle } = styles;
  return (
    <View
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <MediumText>
        {errorText}
      </MediumText>
      <View>
      <Button
        onPress={onPressRetry}
        btnStyle={buttonStyle}
      >
      {i18n.t('common.retry')}
      </Button>
      </View>
    </View>
  );
};

const styles = {
  buttonStyle: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    paddingHorizontal: 15,
  }
};

export { RetryScreen };
