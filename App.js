import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import ScanScreen from './screen/ScanScreen'

export default class App extends React.Component() {
  render(){
  return (
    <AppConatiner/>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Search: {screen: ScanScreen}
});

const AppContainer = createAppContainer(TabNavigator)
