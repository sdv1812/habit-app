import React, { Component } from 'react';
import { Text } from 'react-native';
import textStyles from '../../config/Typography';
import colors from '../../config/Colors';

class LargeText extends Component {
  render() {
    const color = this.props.color || colors.generalTextColor;
    let style = this.props.bold ? textStyles.largeTextBold : textStyles.largeText;
    style = { ...style, color };
    return (
      <Text
        style={[style, this.props.style]}
        maxFontSizeMultiplier={1}
      >
        {this.props.children}
      </Text>
    );
  }
}

export { LargeText };
