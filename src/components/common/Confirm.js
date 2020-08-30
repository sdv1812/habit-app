import React from 'react';
import { View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({
  children,
  visible,
  onAccept,
  onDecline,
  acceptBtnTxt,
  declineBtnTxt,
  acceptBtnStyle,
  declineBtnStyle,
  acceptBtnTxtStyle,
  declineBtnTxtStyle,
}) => {
  const { containerStyle, buttonContainerStyle, btnStyle } = styles;
  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection>
          {children}
        </CardSection>

        <CardSection
          style={buttonContainerStyle}
        >
          <Button
            txtStyle={[{ paddingHorizontal: 20 }, declineBtnTxtStyle]}
            btnStyle={[btnStyle, declineBtnStyle]}
            onPress={onDecline}
          >
            {declineBtnTxt}
          </Button>
          <Button
            txtStyle={[{ paddingHorizontal: 20 }, acceptBtnTxtStyle]}
            btnStyle={[btnStyle, acceptBtnStyle]}
            onPress={onAccept}
          >
            {acceptBtnTxt}
          </Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonContainerStyle: {
    justifyContent: 'flex-end'
  },
  btnStyle: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, heigth: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    borderRadius: 7,
  }
};

export { Confirm };
