import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { 
  useFonts,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
} from '@expo-google-fonts/lato';
import * as SplashScreen from 'expo-splash-screen';
import { MediumText } from './src/components/common';
import Colors from './src/config/Colors';
import Navigation from './src/components/Navigation';
import AuthContext from './src/components/AuthContext';

export default function App(props) {
  let [isAppReady, setAppReady] = useState(false);
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
  });

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'FIRST_TIME':
          return {
            ...prevState,
            isFirstTime: action.data,
          };
      }
    },
    {
      isFirstTime: true,
    }
  );

  const setFirstTime = (data) => {
    dispatch({ type: 'FIRST_TIME', data });
  };

  // const authContext = React.useMemo(
  //   () => ({
  //     signIn: async data => {
  //       // In a production app, we need to send some data (usually username, password) to server and get a token
  //       // We will also need to handle errors if sign in failed
  //       // After getting token, we need to persist the token using `AsyncStorage`
  //       // In the example, we'll use a dummy token

  //       dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
  //     },
  //   }),
  //   []
  // );

  const performAPICalls = async () => {};
  const downloadAssets = async () => {};
  useEffect(() => {
    async function loadAssets() {
      await SplashScreen.preventAutoHideAsync();
      await performAPICalls();
      await downloadAssets();
      SplashScreen.hideAsync();
      setAppReady(true);
    }
    loadAssets();
  }, []);

  if (!isAppReady || !fontsLoaded) {
    return null;
  }
  return (
    <AuthContext.Provider value={setFirstTime}>
      <SafeAreaProvider>
        <Navigation firstTime={state.isFirstTime}/>
      </SafeAreaProvider>
    </AuthContext.Provider>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
