import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen } from '@screens';
import store from './store';

const Stack = createStackNavigator();
const App = () => {
  const handleNavStateChange = navState => {
    console.log('nav state change', navState);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer onStateChange={handleNavStateChange}>
            <Stack.Navigator initialRouteName="splash" headerMode="none">
              <Stack.Screen name="Splash" component={SplashScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
