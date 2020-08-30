import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    MediumText,
    Button,
} from './common';
import Colors from '../config/Colors';
import Styles from '../config/Styles';

const IntroScreen = (props) => {
    const {
        container,
    } = styles;
    return (
        <SafeAreaView style={container}>
            <MediumText>IntroScreen</MediumText>
            <Button 
                btnStyle={Styles.bottomButton}
                onPress={() =>props.navigation.navigate('BoardSizeScreen')}
            >
                Yes, I want to improve
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default IntroScreen;

