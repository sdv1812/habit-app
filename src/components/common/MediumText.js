import React, { Component } from 'react';
import { Text } from 'react-native';
import textStyles from '../../config/Typography';
import colors from '../../config/Colors';

class MediumText extends Component {
  render() {
    const color = this.props.color || colors.generalTextColor;
    let style = this.props.bold ? textStyles.mediumTextBold : textStyles.mediumText;
    style = { ...style, color };
    return (
      <Text
        style={[style, this.props.style]}
        allowFontScaling={this.props.allowFontScaling}
      >
        {this.props.children}
      </Text>
    );
  }
}

export { MediumText };
