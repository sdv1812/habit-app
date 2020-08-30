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


const AddHabitsScreen = (props) => {
    const {
        container,
    } = styles;
    return (
        <SafeAreaView style={container}>
            <MediumText>AddHabitsScreen</MediumText>
            <Button 
                btnStyle={Styles.bottomButton}
                onPress={() =>props.navigation.navigate('TimeOfNotificationScreen')}
            >
                Continue
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

export default AddHabitsScreen;

