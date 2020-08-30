import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Colors from '../../config/Colors';

class Meter extends Component {
  state = {
    cents: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.cents, {
      toValue: this.props.cents,
      duration: 500
    }).start();
  }

  // componentWillReceiveProps(props) {
  //   Animated.timing(this.state.cents, {
  //     toValue: props.cents,
  //     duration: 500
  //   }).start();
  // }
// <LargeText bold color='#C1815E' style={{ fontSize: 28, marginTop: 100 }}> FAIR </LargeText>
  render() {
    const cents = this.state.cents.interpolate({
      inputRange: [-50, 50],
      outputRange: ['-45deg', '45deg']
    });

    const pointerStyle = {
      transform: [{ rotate: cents }]
    };

    return (
        <View style={style.meter}>
          <View style={style.origin} />
          <Animated.View
            style={[style.scale, style.strong, style.pointer, pointerStyle]}
          />
          <View style={[style.scale, style.scale_5, style.strong]} />
          <View style={[style.scale, style.scale_4]} />
          <View style={[style.scale, style.scale_3]} />
          <View style={[style.scale, style.scale_2]} />
          <View style={[style.scale, style.scale_1]} />
          <View style={[style.scale, style.strong]} />
          <View style={[style.scale, style.scale1]} />
          <View style={[style.scale, style.scale2]} />
          <View style={[style.scale, style.scale3]} />
          <View style={[style.scale, style.scale4]} />
          <View style={[style.scale, style.scale5, style.strong]} />
        </View>
    );
  }
}

const style = StyleSheet.create({
  meter: {
    height: 175,
    marginBottom: 20,
    marginRight: 10
  },
  origin: {
    position: 'absolute',
    bottom: -4,
    left: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: Colors.meterColor,
  },
  pointer: {
    borderTopWidth: 173
  },
  scale: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: 1,
    height: 350,
    borderTopWidth: 10,
    borderTopColor: Colors.meterColor,
    marginLeft: 4
  },
  strong: {
    width: 2,
    borderTopWidth: 20
  },
  scale_1: {
    transform: [{ rotate: '-9deg' }]
  },
  scale_2: {
    transform: [{ rotate: '-18deg' }]
  },
  scale_3: {
    transform: [{ rotate: '-27deg' }]
  },
  scale_4: {
    transform: [{ rotate: '-36deg' }]
  },
  scale_5: {
    transform: [{ rotate: '-45deg' }]
  },
  scale1: {
    transform: [{ rotate: '9deg' }]
  },
  scale2: {
    transform: [{ rotate: '18deg' }]
  },
  scale3: {
    transform: [{ rotate: '27deg' }]
  },
  scale4: {
    transform: [{ rotate: '36deg' }]
  },
  scale5: {
    transform: [{ rotate: '45deg' }]
  }
});

export { Meter };
