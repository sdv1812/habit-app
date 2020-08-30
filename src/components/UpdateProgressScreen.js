import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    MediumText,
} from './common';
import Colors from '../config/Colors';

const UpdateProgressScreen = () => {
    const {
        container,
    } = styles;
    return (
        <SafeAreaView style={container}>
            <MediumText>UpdateProgressScreen</MediumText>
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

export default UpdateProgressScreen;

