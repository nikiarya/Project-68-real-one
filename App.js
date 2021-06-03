import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs'; 
import Fb from './screens/Fb'; 
import In from './screens/In'; 

export default class App extends React.Component {
  render() {
    return(
      <AppContainer/> 
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook : { screen : Fb}, 
  Instagram : { screen : In}
})

const AppContainer = createAppContainer(TabNavigator)