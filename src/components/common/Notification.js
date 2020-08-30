import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Colors from '../../config/Colors';

class Notification extends React.Component {

  onPress() {
    this.props.onPress();
  }
  // <View style={firstRowStyle}>
  //   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //   <View style={squareStyle} />
  //   <SmallText color={Colors.unselectTextColor}>
  //     {i18n.t('notification.subject')}
  //   </SmallText>
  //   </View>
  //   <SmallText color={Colors.unselectTextColor}>
  //     {i18n.t('notification.time')}
  //   </SmallText>
  // </View>

  render() {
    const { containerStyle, firstRowStyle, squareStyle } = styles;
    return (
        <TouchableOpacity
          onPress={() => this.props.onPress()}
          style={[containerStyle, this.props.style]}
        >

          {this.props.children}
        </TouchableOpacity>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: Colors.notificationBackgroundColor,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 1,
    height: 80,
  },
  firstRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  squareStyle: {
    height: 15,
    width: 15,
    backgroundColor: Colors.unselectTextColor,
    marginRight: 5,
    borderRadius: 3
  }
};

export { Notification };
