import React,{useState} from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SwitchNavigator } from './src/tabnavigator/SwitchNavigator';
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SwitchNavigator />
      </NavigationContainer>
    </Provider>
  );
}

