import React from 'react';
import { TouchableOpacity } from 'react-native';
import Colors from '../../config/Colors';

class SelectionPanel extends React.Component {

  onPress() {
    this.props.onPress(this.props.type);
  }

  getStyles() {
    if (this.props.selected) {
      styles.containerStyle.backgroundColor = Colors.selectedBackgroundColor;
    } else {
      styles.containerStyle.backgroundColor = Colors.unSelectedBackgroundColor;
    }
    return styles.containerStyle;
  }

  render() {
    const containerStyle = this.getStyles();
    return (
        <TouchableOpacity
          disabled={this.props.disabled}
          onPress={() => this.props.onPress(this.props.type)}
          style={[containerStyle, this.props.style]}
        >
        {this.props.children}
        </TouchableOpacity>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 8
  }
};

export { SelectionPanel };
