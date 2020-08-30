import { StyleSheet } from 'react-native';

const largeText = 17;
const mediumText = 15;
const smallText = 13;
const regularText = 'Lato_400Regular';
const boldText = 'Lato_700Bold';
const textStyles = StyleSheet.create({
  largeText: {
    fontFamily: regularText,
    fontSize: largeText
  },
  largeTextBold: {
    fontFamily: boldText,
    fontSize: largeText
  },
  mediumText: {
    fontFamily: regularText,
    fontSize: mediumText
  },
  mediumTextBold: {
    fontFamily: boldText,
    fontSize: mediumText
  },
  smallText: {
    fontFamily: regularText,
    fontSize: smallText
  },
  smallTextBold: {
    fontFamily: boldText,
    fontSize: smallText
  },
});

export default textStyles;
