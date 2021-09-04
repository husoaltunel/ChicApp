import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { mainStyles } from './app/globals/assets/styles/Main-style'
import { NativeBaseProvider } from 'native-base'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import StackNavigation from './app/navigation/stackNavigation/StackNavigation';
import { Provider } from 'react-redux';
import configureStore from './app/redux/store/ConfigureStore';

const store = configureStore();

const App = () => {

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView style={mainStyles.style}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>


  );

};



export default App;
