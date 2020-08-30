import React, { Component } from 'react';
import { Text } from 'react-native';
import textStyles from '../../config/Typography';
import colors from '../../config/Colors';

class SmallText extends Component {
  render() {
    const color = this.props.color || colors.generalTextColor;
    let style = this.props.bold ? textStyles.smallTextBold : textStyles.smallText;
    style = { ...style, color };
    return (
      <Text
        {...this.props}
        allowFontScaling={this.props.allowFontScaling}
        style={[style, this.props.style]}
      >
        {this.props.children}
      </Text>
    );
  }
}

export { SmallText };
