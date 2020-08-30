import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
// import { MediumText } from './MediumText';
import { SmallText } from './SmallText';
import Colors from '../../config/Colors';
import AppConstants from '../../config/Constants';

const ProductCard = ({
  imageUrl,
  brandName,
  productName,
  application,
  containerStyle,
  onPress,
}) => {
  const {
    applicationTime
  } = AppConstants;
  const {
    container
  } = styles;
  const renderDayNightIcon = () => {
    if (application === applicationTime.day) {
      return (
        <Icon name='sun-o' type='font-awesome' size={14} color={Colors.generalTextColor} />
      );
    } else if (application === applicationTime.night) {
      return (
        <Icon name='moon-o' type='font-awesome' size={14} color={Colors.generalTextColor} />
      );
    }
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon name='sun-o' type='font-awesome' size={14} color={Colors.generalTextColor} />
        <Icon name='moon-o' type='font-awesome' size={14} color={Colors.generalTextColor} />
      </View>
    );
  };
  return (
    <TouchableOpacity
      style={[container, containerStyle]}
      onPress={onPress}
    >
      <ImageBackground
        source={{ uri: imageUrl }}
        resizeMode='contain'
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          margin: 10
        }}
      >
      {renderDayNightIcon()}
      </ImageBackground>
      <SmallText
        bold
      >
        {brandName}
      </SmallText>
      <SmallText
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {productName}
      </SmallText>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    height: undefined,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'stretch',
    flexDirection: 'column',
    padding: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    marginHorizontal: 2,
  }
};

export { ProductCard };
