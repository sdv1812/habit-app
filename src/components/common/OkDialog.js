import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { MediumText } from './MediumText';
import { Button } from './Button';
import { CardSection } from './CardSection';
import i18n from '../../translations/i18n';

const OkDialog = ({ children, visible, onPressOk }) => {
  const { containerStyle, textStyle, cardSectionStyle, okBtnStyle } = styles;
  return (
    <Modal
      isVisible={visible}
      transparent
      animationIn="fadeIn"
      animationOut="fadeOut"
      onRequestClose={() => {}}
    >
    <View style={containerStyle}>
      <CardSection style={cardSectionStyle}>
        <MediumText style={textStyle}>{children}</MediumText>
      </CardSection>
      <CardSection style={{ justifyContent: 'flex-end' }}>
        <Button
          btnStyle={okBtnStyle}
          txtStyle={{ paddingHorizontal: 20 }}
          onPress={onPressOk}
        >{i18n.t('common.ok')}</Button>
      </CardSection>
    </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 25
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  okBtnStyle: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, heigth: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    borderRadius: 7,
  }
};

export { OkDialog };
