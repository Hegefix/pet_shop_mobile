import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen } from '@screens';

const Stack = createStackNavigator();
const App = () => {
  const handleNavStateChange = navState => {
    console.log('nav state change', navState);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <NavigationContainer onStateChange={handleNavStateChange}>
          <Stack.Navigator initialRouteName="splash" headerMode="none">
            <Stack.Screen name="Splash" component={SplashScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
