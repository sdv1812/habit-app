import React from 'react';
import {
  View
} from 'react-native';
import Slider from 'react-native-slider';
import { MediumText } from './MediumText';
import { SmallText } from './SmallText';
import fonts from '../../config/Fonts';

const SliderRow = ({
  sliderRowStyle,
  categoryName,
  sliderTextLeft,
  sliderTextRight,
  sliderTextStyle,
  categoryValue,
  minimumTrackTintColor,
  thumbImage,
  thumbTintColor,
  categoryValueColor,
  categoryValueStyle,
}) => {
  return (
    <View style={sliderRowStyle}>
      <SmallText allowFontScaling={false} style={{ flex: 0.25, fontFamily: fonts.segoeUILight }}>
        {categoryName}
      </SmallText>
      <View
        style={{
          flex: 0.6, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'
        }}
      >
        <View
          style={{
            flexDirection: 'row', justifyContent: 'space-between'
          }}
        >
          <MediumText allowFontScaling={false} style={sliderTextStyle}>{sliderTextLeft}</MediumText>
          <SmallText allowFontScaling={false} style={sliderTextStyle}>{sliderTextRight}</SmallText>
        </View>
        <Slider
          pointerEvents='none'
          minimumValue={1}
          maximumValue={100}
          value={categoryValue}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor='#eaeaea'
          thumbImage={thumbImage}
          thumbTintColor={thumbTintColor}
        />
      </View>
      <MediumText
        color={categoryValueColor}
        style={[categoryValueStyle, { flex: 0.15 }]}
        allowFontScaling={false}
      >
        {categoryValue}
      </MediumText>
    </View>
  );
};

export { SliderRow };
