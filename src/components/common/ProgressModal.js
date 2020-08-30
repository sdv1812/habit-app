import React from 'react';
import { View, Modal } from 'react-native';
import { CardSection } from './CardSection';


const ProgressModal = ({ children, visible }) => {
  const { containerStyle, cardSectionStyle } = styles;
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
    <View style={containerStyle}>
      <CardSection style={cardSectionStyle}>
        {children}
      </CardSection>
    </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
};

export { ProgressModal };
