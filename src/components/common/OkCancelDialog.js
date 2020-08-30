import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { MediumText } from './MediumText';
import { LargeText } from './LargeText';
import { Button } from './Button';
import { CardSection } from './CardSection';
import Colors from '../../config/Colors';

const OkCancelDialog = (props) => {
  const {
    visible,
    onPressOk,
    onPressCancel,
    okText,
    cancelText,
    headerText,
    bodyText,
  } = props;
  const {
    containerStyle,
    textStyle,
    cardSectionStyle,
    okBtnStyle,
    cancelBtnStyle
  } = styles;
  return (
    <Modal
      isVisible={visible}
      transparent
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
    <View style={containerStyle}>
      <CardSection style={{ justifyContent: 'flex-start', padding: 10 }}>
        <LargeText bold>
        {headerText}
        </LargeText>
      </CardSection>
      <CardSection style={cardSectionStyle}>
        <MediumText style={textStyle}>
          {bodyText}
        </MediumText>
      </CardSection>
      <CardSection style={{ justifyContent: 'space-around' }}>
        <Button
          btnStyle={okBtnStyle}
          txtStyle={{ paddingHorizontal: 20 }}
          onPress={onPressOk}
        >{okText}</Button>
        <Button
          btnStyle={cancelBtnStyle}
          txtStyle={{ paddingHorizontal: 20, color: Colors.generalTextColor }}
          onPress={onPressCancel}
        >{cancelText}</Button>
      </CardSection>
    </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'flex-start',
    padding: 10
  },
  textStyle: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 25
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  okBtnStyle: {
    borderRadius: 7,
  },
  cancelBtnStyle: {
    backgroundColor: Colors.backgroundColor
  }
};

export { OkCancelDialog };
