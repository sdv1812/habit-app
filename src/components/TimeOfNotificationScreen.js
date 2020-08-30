import React, { useReducer } from 'react';
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
import AuthContext from '../components/AuthContext';

const TimeOfNotificationScreen = () => {

    const { setFirstTime } = React.useContext(AuthContext);

    const onPress = () => {
        setFirstTime(false);
    }
    const {
        container,
    } = styles;
    return (
        <SafeAreaView style={container}>
            <MediumText>TimeOfNotificationScreen</MediumText>
            <Button 
                btnStyle={Styles.bottomButton}
                onPress={onPress}
            >
                Create My Board
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

export default TimeOfNotificationScreen;

